const parties = [
    "ชาติไทยพัฒนา", 
    "ประชาธิปัตย์", 
    "พลังประชารัฐ", 
    "เพื่อไทย", 
    "ภูมิใจไทย", 
    "อนาคตใหม่", 
    "ไทยรักษาชาติ", 
    "รวมพลังประชาชาติไทย", 
    "เพื่อชาติ", 
    "เพื่อธรรม", 
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
    '#fee090',
    '#ffffbf',
    '#e0f3f8',
    '#abd9e9',
    '#74add1',
    '#4575b4',
    '#313695'
];

/* ===== Streamgraph's Config ===== */ 
const streamgraph = {
    width: 321, // Same fixed width for both desktop and mobile for simplicity
    side_margin: 30,
    between_day_distance: 24, // 24px between days.

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
    width: 321, // Fixed width for simplicity
    between_bar_distance: 24, // 8px between bars

    svg: d3.select('#minibar svg'),

    x: d3.scaleLinear()
}

const parseTime = d3.timeParse('%Y-%m-%d');
const formatTime = d3.timeFormat('%a %b %d, %Y'); 

d3.json('social-summary.json').then((raw) => init(raw));

function init(raw) {
    streamgraph.raw = raw;
    // console.log(raw);

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
    // initMinibar(max_engagement);
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
    streamgraph.g.selectAll('.highlightarea')
        .data(streamgraph.raw)
        .enter().append('rect')
        .classed('highlightarea', true)
        .attr('x', (d,i) => streamgraph.x(i) - streamgraph.between_day_distance / 2)
        .attr('y', 0)
        .attr('width', streamgraph.between_day_distance)
        .attr('height', streamgraph.width);

    streamgraph.g.selectAll('path')
        .data(series)
        .enter().append('path')
        .attr('d', streamgraph.area)
        .attr('fill', (d,i) => colors[i])
        // Give a smoother look at edges
        .attr('stroke', '#fbf8ed')
        .attr('stroke-width', 3)
        .attr('stroke-opacity', 0.25);
    
    streamgraph.g.selectAll('line')
        .data(d3.range(series[0].length))
        .enter().append('line')
        .classed('grid', true)
        .attr('x1', (d,i) => streamgraph.x(i) + streamgraph.between_day_distance / 2)
        .attr('x2', (d,i) => streamgraph.x(i) + streamgraph.between_day_distance / 2)
        // (i - 2) is a quick hack to draw a longer grid on Sunday. Our dataset starts on Thursday. 
        .attr('y1', (d,i) => ((i - 2) % 7 == 0) ? 0 : 15)
        .attr('y2', (d,i) => ((i - 2) % 7 == 0) ? streamgraph.width : 35);

    streamgraph.g.selectAll('.hoverarea')
        .data(streamgraph.raw)
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
    d3.selectAll('.highlightarea')
        .classed('highlight', dd => dd.created_date_bkk == d.created_date_bkk);
    d3.selectAll('.top-post')
        .classed('hidden', dd => dd.created_date_bkk != d.created_date_bkk);
}

function initMinibar(max_engagement) {
    minibar.svg
        .attr('width', minibar.width)
        .attr('height', minibar.between_bar_distance * 3 + 12); // Showing top 3
    minibar.g = minibar.svg.append('g'); 

    minibar.x
        .domain([0, max_engagement])
        .range([0, minibar.width]);
    
    // minibar.g.selectAll('bar')
    //     .data()
}
