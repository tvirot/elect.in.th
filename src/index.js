import { formatFullDate, formatDate } from './utils/formatThaiTime';
import { PARTIES, COLORS } from './constants';
import './style.css';
import dataFile from './social-summary.json';

const partyColor = d3.scaleOrdinal()
  .domain(PARTIES)
  .range(COLORS);

const parseTime = d3.timeParse('%Y-%m-%d');
const dateOffset = 2; 

/* ===== Streamgraph's Config ===== */
const streamgraph = {
    width: 321, // Same fixed width for both desktop and mobile for simplicity
    side_margin: 30,
    between_day_distance: 32, // 24px between days.

    svg: d3.select('#streamgraph svg'),

    x: d3.scaleLinear(),
    y: d3.scaleLinear(),

    stack: d3.stack()
        .keys(PARTIES)
        .order(d3.stackOrderInsideOut)
        .offset(d3.stackOffsetWiggle),

    area: d3.area().curve(d3.curveBasis) // Smooth out wiggles
}

/* ===== Mini bar chart's config ===== */
const minibar = {
    width: 321, // Fixed width for simplicity
    margin: {
        top: 20,
        bottom: 10,
        left: 12,
        right: 12
    },
    between_bar_distance: 36, // 8px between bars
    n_top: 3,

    svg: d3.select('#minibar svg'),

    x: d3.scaleLinear(),

    transition: d3.transition().duration(250)
}

let raw;
d3.json(dataFile).then((json) => {
    raw = json.reverse();
    // console.log(raw);
    init(raw);
});

// Display legend
d3.select('#legend')
    .selectAll('div')
    .data(PARTIES)
    .enter().append('div')
    .html(d => `
        <i class="fas fa-circle" style="color:${partyColor(d)};"></i>
        ${d}
    `);

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
    const data = raw.map(d => {
        let entry = {};
        entry.date = d.created_date_bkk;
        PARTIES.forEach(party => { entry[party] = 5; }); // Init with 1 (avoid 0)
        d.stats.forEach(dd => { entry[dd.party] = ++dd.total_engagement; });
        max_engagement = Math.max(max_engagement, d3.max(d.stats.map(dd => dd.total_engagement)));
        return entry;
    });
    // console.log(data);

    const series = initStreamgraph(data);
    renderStreamgraph(series);

    // Initialize mini barchart
    initMinibar(max_engagement);

    // Pre-select first date
    handleMouseover(raw[1], 1);
}

function initStreamgraph(data) {
    const series = streamgraph.stack(data);
    // console.log(series);

    streamgraph.svg
        .attr('width', streamgraph.width)
        .attr('height', data.length * streamgraph.between_day_distance);
    streamgraph.g = streamgraph.svg.append('g')
        .attr('transform', 'translate(' + (0.5) + ',' + (0.5) + ')');

    streamgraph.x
        .domain([0, data.length - 1])
        .range([0, data.length * streamgraph.between_day_distance]);
    streamgraph.y
        .domain(d3.extent(d3.merge((d3.merge(series)))))
        .range([streamgraph.width - streamgraph.side_margin, streamgraph.side_margin]);

    streamgraph.area
        .x((d, i) => streamgraph.x(i))
        // Add extra spaces between chunks
        // .y0(d => Math.max(streamgraph.y(d[0]) - 2, streamgraph.y(d[1])))
        // .y1(d => Math.min(streamgraph.y(d[1]) + 2, streamgraph.y(d[0])))
        .y0(d => streamgraph.y(d[0]))
        .y1(d => streamgraph.y(d[1]));

    return series;
}

function renderStreamgraph(series) {
    series.sort((a, b) => a[0][0] - b[0][0]);

    const highlights = streamgraph.g.append('g').classed('highlight-layer', true)
        .selectAll('.highlight')
        .data(raw)
        .enter().append('g')
        .attr('class', 'highlight hidden')
        .attr('transform', (d,i) => `translate(${streamgraph.x(i) - streamgraph.between_day_distance / 2 - 2}, 0)`);

    highlights.append('rect')
        .attr('class', 'highlight-area')
        .attr('width', streamgraph.between_day_distance + 2)
        .attr('height', streamgraph.width)
        .attr('rx', 3)
        .attr('ry', 3);

    // highlights.append('line')
    //     .attr('class', 'highlight-line')
    //     .attr('y2', streamgraph.width);
    // highlights.append('line')
    //     .attr('class', 'highlight-line')
    //     .attr('x1', (d,i) => streamgraph.between_day_distance)
    //     .attr('x2', (d,i) => streamgraph.between_day_distance)
    //     .attr('y2', streamgraph.width);

    const half = Math.floor(series.length / 2);
    function offset(i) {
        return i === half ? 0 : (half - i) * 0;
    }

    streamgraph.g.append('g').classed('path-layer', true)
        .style('opacity', 0.3)
        .selectAll('g')
        .data(series)
        .enter()
        .append('g')
        .attr('transform', (d, i) => `translate(0, ${offset(i)})`)
        .append('path')
        .attr('d', streamgraph.area)
        .attr('fill', d => partyColor(d.key))
        // Give a smoother look at edges
        .attr('stroke', '#e7e9e4')
        .attr('stroke-width', 1)
        .attr('stroke-opacity', 0.25);

    streamgraph.clipRect = streamgraph.svg.append('defs')
        .append('clipPath')
            .attr('id', 'clip-selection')
        .append('rect')
            .attr('rx', 3)
            .attr('ry', 3)
            .attr('x', streamgraph.x(1) - streamgraph.between_day_distance / 2 - 2)
            .attr('width', streamgraph.between_day_distance + 2)
            .attr('height', streamgraph.width);


    streamgraph.g.append('g').classed('path2-layer', true)
        .attr('clip-path', 'url(#clip-selection)')
        .selectAll('g')
            .data(series)
            .enter()
            .append('g')
            .attr('transform', (d, i) => `translate(0, ${offset(i)})`)
            .append('path')
            .attr('d', streamgraph.area)
            .attr('fill', d => partyColor(d.key))
            // Give a smoother look at edges
            .attr('stroke', '#e7e9e4')
            .attr('stroke-width', 1)
            .attr('stroke-opacity', 0.25);

    streamgraph.g.append('g').classed('grid-layer', true)
        .selectAll('.grid')
        .data(d3.range(series[0].length))
        .enter().append('line')
        .classed('grid', true)
        .attr('x1', (d,i) => streamgraph.x(i) + streamgraph.between_day_distance / 2)
        .attr('x2', (d,i) => streamgraph.x(i) + streamgraph.between_day_distance / 2)
        // (i - dateOffset) is a quick hack to draw a longer grid on Sunday.
        .attr('y1', (d,i) => ((i - dateOffset) % 7 == 0) ? 0 : 15)
        .attr('y2', (d,i) => ((i - dateOffset) % 7 == 0) ? streamgraph.width : 35);

    streamgraph.g.append('g').classed('sunday-layer', true).selectAll('.sunday')
        .data(raw)
        .enter()
        .filter((d, i) => (i - dateOffset) % 7 == 0)
        .append('g')
        .classed('sunday', true)
        .attr('transform', (d, i) => `translate(${streamgraph.x(i*7+dateOffset) + streamgraph.between_day_distance / 2 - 4}, ${10})`)
        .append('g')
        .attr('transform', 'rotate(-90)')
        .append('text')
        .attr('y', -4)
        .style('text-anchor', 'end')
        .text(d => formatDate(parseTime(d.created_date_bkk)));

    streamgraph.g.append('g').classed('glass-layer', true).selectAll('.hoverarea')
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

function handleMouseover(d, i) {
    if (i == 0) return;  // No data for the first data point. 

    d3.select('#date')
        .text(formatFullDate(parseTime(d.created_date_bkk)));
    d3.selectAll('.highlight')
        .classed('hidden', dd => dd.created_date_bkk != d.created_date_bkk);
    streamgraph.clipRect
        .attr('x', streamgraph.x(i) - streamgraph.between_day_distance / 2 - 2)
    // d3.selectAll('.top-post')
    //     .classed('hidden', dd => dd.created_date_bkk != d.created_date_bkk);
    renderMinibar(d.stats.slice(0, minibar.n_top));
    d3.select('#top-post .username').text(d.top_post.user_name);
    d3.select('#top-post .channel i').attr('class', d.top_post.channel == 'twitter' ? 'fab fa-twitter' : 'fab fa-facebook-f');
    const text = d.top_post.text.replace(/http/gi, ' http');
    d3.select('#top-post .post').text(text.length > 300 ? text.substr(0,300) + ' ...' : text);
    d3.select('#top-post a').attr('href', d.top_post.permalink);
}

function initMinibar(max_engagement) {
    minibar.svg
        .attr('width', minibar.width)
        .attr('height', minibar.between_bar_distance * minibar.n_top + minibar.margin.top + minibar.margin.bottom);
    minibar.g = minibar.svg.append('g')
        .attr('transform', `translate(${minibar.margin.left} ${minibar.margin.top})`);

    minibar.x
        .domain([0, max_engagement])
        .nice(10)
        .range([0, minibar.width - minibar.margin.left - minibar.margin.right]);

    const xAxis1 = d3.axisBottom(minibar.x)
        .ticks(5)
        .tickSizeInner(4)
        .tickSizeOuter(0)
        .tickPadding(6);

    const xAxis2 = d3.axisBottom(minibar.x)
        .ticks(10)
        .tickSizeInner(-minibar.between_bar_distance * minibar.n_top)
        .tickSizeOuter(0)
        .tickPadding(12);

    minibar.bars = minibar.g.append('g');

    minibar.g.append('g')
        .attr('class', 'xaxis')
        .attr('transform', `translate(0, ${minibar.between_bar_distance * (minibar.n_top - 0.5)})`)
        .call(xAxis1)
        .selectAll('text')
        .attr('dx', 4)

    minibar.g.append('g')
        .attr('class', 'xaxis2')
        .attr('transform', `translate(0, ${minibar.between_bar_distance * (minibar.n_top - 0.5)})`)
        .call(xAxis2)
        .selectAll('text')
        .remove();

    minibar.g.append('text')
        .attr('class', 'bar-label-x')
        .attr('x', (minibar.width - minibar.margin.right - minibar.margin.left))
        .attr('dx', 3)
        .attr('y', minibar.between_bar_distance * minibar.n_top - 20)
        .attr('dy', -4)
        .attr('text-anchor', 'end')
        .text('การมีส่วนร่วม');

    // renderMinibar(raw[0].stats.slice(0, minibar.n_top));
}

function renderMinibar(top_three_stats) {
    const bars = minibar.bars.selectAll('.bar')
        .data(top_three_stats, (d,i) => i);

    bars.exit().remove();
    bars.enter().append('rect')
        .attr('class', 'bar')
        .attr('height', Math.floor(minibar.between_bar_distance * 0.3))
        .attr('rx', 3)
        .attr('ry', 3)
        .attr('y', (d,i) => (i - 0.5 + 0.45) * minibar.between_bar_distance)
        .attr('fill', d => partyColor(d.party))
        // .transition(minibar.transition)
        .attr('width', (d,i) => minibar.x(d.total_engagement));
    bars
        .attr('y', (d, i) => (i - 0.5 + 0.45) * minibar.between_bar_distance)
        .attr('fill', d => partyColor(d.party))
        // .transition(minibar.transition)
        .attr('width', (d,i) => minibar.x(d.total_engagement));

    const labels = minibar.g.selectAll('.bar-label-y')
        .data(top_three_stats, (d,i) => i);

    labels.exit().remove();
    labels.enter().append('text')
        .attr('class', 'bar-label-y')
        .attr('x', -minibar.margin.left)
        .attr('y', (d, i) => i * minibar.between_bar_distance)
        .attr('dx', minibar.margin.left)
        .attr('dy', -8)
        .attr('text-anchor', 'start')
        .text(d => d.party);

    labels
        .text(d => d.party)
        .attr('y', (d,i) => i * minibar.between_bar_distance);
}
