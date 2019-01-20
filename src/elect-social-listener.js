const parties = [
    "ชาติไทยพัฒนา", 
    "ประชาธิปัตย์", 
    "พลังประชารัฐ", 
    "เพื่อไทย", 
    "ภูมิใจไทย", 
    "อนาคตใหม่", 
    "ไทยรักษาชาติ", 
    "รวมพลังประชาชาติไทย", 
    // "เพื่อชาติ", 
    // "เพื่อธรรม", 
    "ประชาชาติ"
];

const colors_old = [
    "#d08c90",
//  "#ddb18b",
    "#a39163",
    "#b7c791",
    "#78a06c",
    "#6aa082",
//  "#90d2b6",
    "#54a6a0",
    "#69cee0",
    "#599cc0",
    "#a0bbe7",
    "#a687b6",
    "#e3b3dc"
];

const colors = [
    '#a50026',
    '#d73027',
    '#f46d43',
    '#fdae61',
    // '#fee090',
    // '#ffffbf',
    '#e0f3f8',
    '#abd9e9',
    '#74add1',
    '#4575b4',
    '#313695'
];

const party2color = {};
parties.forEach((d,i) => party2color[d] = colors[i]);

/* ===== Streamgraph's Config ===== */ 
const streamgraph = {
    width: 321, // Same fixed width for both desktop and mobile for simplicity
    side_margin: 30,
    between_day_distance: 32, // 24px between days.

    svg: d3.select('#streamgraph svg'),

    x: d3.scaleLinear(),
    y: d3.scaleLinear(),

    stack: d3.stack()
        .keys(parties)
        .order(d3.stackOrderInsideOut)
        .offset(d3.stackOffsetWiggle),

    area: d3.area()
        .curve(d3.curveCardinal.tension(0.25)) // Smooth out wiggles
}

/* ===== Mini bar chart's config ===== */
const minibar = {
    width: 500, // Fixed width for simplicity
    margin: {
        top: 32,
        bottom: 48,
        left: 160,
        right: 30
    },
    between_bar_distance: 24, // 8px between bars
    n_top: 3,

    svg: d3.select('#minibar svg'),

    x: d3.scaleLinear(),

    transition: d3.transition().duration(250)
}

const parseTime = d3.timeParse('%Y-%m-%d');
const formatTime = d3.timeFormat('%a %b %d, %Y'); 

let raw;
d3.json('social-summary.json').then((json) => {
    raw = json;
    // console.log(raw);
    init(raw)
});

function init(raw) {
    /*
    // Initialize FB / Twitter posts
    d3.select('#top-posts')
        .selectAll('.top-post')
        .data(raw)
        .enter().append('div')
        .attr('class', 'top-post hidden')
        .html(d => {
            if(d.top_post.permalink.includes('facebook')) {
                return `<div class="fb-post" 
                    data-href="${d.top_post.permalink}"
                    data-width="500">
                </div>`
            } else {
                return `<blockquote class="twitter-tweet" data-lang="th" width="500" align="left">
                    <a href="${d.top_post.permalink}"></a>
                </blockquote>
                `
            }
        });
    */

    // Initialize streamgraph 
    let max_engagement = 0; 
    const data = []; 

    raw.forEach(d => {
        let entry = {};
        entry.date = d.created_date_bkk;
        parties.forEach(party => { entry[party] = 1; }); // Init with 1 (avoid 0)
        d.stats.forEach(dd => { entry[dd.party] = ++dd.total_engagement; });
        max_engagement = Math.max(max_engagement, d3.max(d.stats.map(dd => dd.total_engagement)));
        data.push(entry);
    });
    // console.log(data);

    const series = initStreamgraph(data); 
    renderStreamgraph(series); 

    // Initialize mini barchart
    initMinibar(max_engagement);

    // Pre-select first date
    handleMouseover(raw[0]);
}

function initStreamgraph(data) {
    const series = streamgraph.stack(data);
    // console.log(series);

    streamgraph.svg
        .attr('width', streamgraph.width)
        .attr('height', data.length * streamgraph.between_day_distance);
    streamgraph.g = streamgraph.svg.append('g');

    streamgraph.x
        .domain([0, data.length - 1])
        .range([0, data.length * streamgraph.between_day_distance]);
    streamgraph.y
        .domain(d3.extent(d3.merge((d3.merge(series)))))
        .range([streamgraph.width - streamgraph.side_margin, streamgraph.side_margin]);

    streamgraph.area        
        .x((d, i) => streamgraph.x(i))
        // Add extra spaces between chunks
        .y0(d => Math.max(streamgraph.y(d[0]) - 2, streamgraph.y(d[1])))
        .y1(d => Math.min(streamgraph.y(d[1]) + 2, streamgraph.y(d[0])))
        // .y0(d => streamgraph.y(d[0]))
        // .y1(d => streamgraph.y(d[1]));
    
    return series; 
}

function renderStreamgraph(series) { 
    const highlights = streamgraph.g.selectAll('.highlight')
        .data(raw)
        .enter().append('g')
        .attr('class', 'highlight hidden')
        .attr('transform', (d,i) => `translate(${streamgraph.x(i) - streamgraph.between_day_distance / 2 - 2}, 0)`);
        
    highlights.append('rect')
        .attr('class', 'highlight-area')
        .attr('width', streamgraph.between_day_distance + 2)
        .attr('height', streamgraph.width);
    
    // highlights.append('line')
    //     .attr('class', 'highlight-line')
    //     .attr('y2', streamgraph.width);
    // highlights.append('line')
    //     .attr('class', 'highlight-line')
    //     .attr('x1', (d,i) => streamgraph.between_day_distance)
    //     .attr('x2', (d,i) => streamgraph.between_day_distance)
    //     .attr('y2', streamgraph.width);
    
    streamgraph.g.selectAll('path')
        .data(series)
        .enter().append('path')
        .attr('d', streamgraph.area)
        .attr('fill', d => party2color[d.key])
        // Give a smoother look at edges
        .attr('stroke', '#fbf8ed')
        .attr('stroke-width', 3)
        .attr('stroke-opacity', 0.25);
    
    streamgraph.g.selectAll('.grid')
        .data(d3.range(series[0].length))
        .enter().append('line')
        .classed('grid', true)
        .attr('x1', (d,i) => streamgraph.x(i) + streamgraph.between_day_distance / 2)
        .attr('x2', (d,i) => streamgraph.x(i) + streamgraph.between_day_distance / 2)
        // (i - 2) is a quick hack to draw a longer grid on Sunday. Our dataset starts on Thursday. 
        .attr('y1', (d,i) => ((i - 2) % 7 == 0) ? 0 : 15)
        .attr('y2', (d,i) => ((i - 2) % 7 == 0) ? streamgraph.width : 35);

    streamgraph.g.selectAll('.hoverarea')
        .data(raw)
        .enter().append('rect')
        .classed('hoverarea', true)
        .attr('x', (d,i) => streamgraph.x(i) - streamgraph.between_day_distance / 2)
        .attr('y', 0)
        .attr('width', streamgraph.between_day_distance)
        .attr('height', streamgraph.width)
        .on('mouseover', handleMouseover);

    streamgraph.g.attr('transform', `rotate(90 ${streamgraph.width/2} ${streamgraph.width/2}) translate(${streamgraph.between_day_distance / 2} 0)`);
}   

function handleMouseover(d) {
    d3.select('#date')
        .text(formatTime(parseTime(d.created_date_bkk)));
    d3.selectAll('.highlight')
        .classed('hidden', dd => dd.created_date_bkk != d.created_date_bkk);
    // d3.selectAll('.top-post')
    //     .classed('hidden', dd => dd.created_date_bkk != d.created_date_bkk);
    renderMinibar(d.stats.slice(0, minibar.n_top));
    d3.select('#top-post')
        .html(`[placeholder] - Top post of the day
            <br/>${d.top_post.channel}
            <br/>${d.top_post.user_name}
            <br/>${d.top_post.text}
            <br/>${d.top_post.permalink}
        `);
}

function initMinibar(max_engagement) {
    minibar.svg
        .attr('width', minibar.width)
        .attr('height', minibar.between_bar_distance * minibar.n_top + minibar.margin.top + minibar.margin.bottom);
    minibar.g = minibar.svg.append('g')
        .attr('transform', `translate(${minibar.margin.left} ${minibar.margin.top})`); 

    minibar.x
        .domain([0, max_engagement])
        .range([0, minibar.width - minibar.margin.left - minibar.margin.right]);

    minibar.xAxis = d3.axisBottom(minibar.x)
        .ticks(5, 's')
        .tickSizeInner(-minibar.between_bar_distance * minibar.n_top)
        .tickSizeOuter(0)
        .tickPadding(12);

    minibar.bars = minibar.g.append('g');

    minibar.g.append('g')
        .attr('class', 'xaxis')
        .attr('transform', `translate(0 ${minibar.between_bar_distance * (minibar.n_top - 0.5)})`)
        .call(minibar.xAxis);

    minibar.g.append('text')
        .attr('class', 'bar-label-x')
        .attr('x', (minibar.width - minibar.margin.left - minibar.margin.right) / 2)
        .attr('y', minibar.between_bar_distance * minibar.n_top + 36)
        .attr('text-anchor', 'middle')
        .text('การมีส่วนร่วม');
    
    // renderMinibar(raw[0].stats.slice(0, minibar.n_top));
}

function renderMinibar(top_three_stats) {
    const bars = minibar.bars.selectAll('.bar')
        .data(top_three_stats, (d,i) => i);

    bars.exit().remove();
    bars.enter().append('rect')
        .attr('class', 'bar')
        .attr('height', minibar.between_bar_distance * 0.6)
        .attr('rx', 3)
        .attr('ry', 3)
        .attr('y', (d,i) => (i - 0.5) * minibar.between_bar_distance)
        .attr('fill', d => party2color[d.party])
        // .transition(minibar.transition)
        .attr('width', (d,i) => minibar.x(d.total_engagement));
    bars
        .attr('y', (d,i) => (i - 0.5) * minibar.between_bar_distance)
        .attr('fill', d => party2color[d.party])
        // .transition(minibar.transition)
        .attr('width', (d,i) => minibar.x(d.total_engagement));
        
    const labels = minibar.g.selectAll('.bar-label-y')
        .data(top_three_stats, (d,i) => i);
    
    labels.exit().remove();
    labels.enter().append('text')
        .attr('class', 'bar-label-y')
        .attr('x', -12)
        .attr('text-anchor', 'end')
        .text(d => d.party)
        .attr('y', (d,i) => i * minibar.between_bar_distance);
    labels
        .text(d => d.party)
        .attr('y', (d,i) => i * minibar.between_bar_distance);
}
