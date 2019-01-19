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
    // '#fee090',
    // '#ffffbf',
    // '#e0f3f8',
    '#abd9e9',
    '#74add1',
    '#4575b4',
    '#313695'
];

const stack = d3.stack()
    .keys(parties)
    .order(d3.stackOrderInsideOut)
    .offset(d3.stackOffsetWiggle);

const width = 321; 
const day_gap_height = 24; // 24px between days.
const height = 7 * day_gap_height; // Visible area of a week. 

const svg = d3.select('#streamgraph').append('svg')
    .attr('width', width);

// TO-DO: Dynamically adjust size

const g = svg.append('g'); // TO-DO: Flip coordinate

const x = d3.scaleLinear();
const y = d3.scaleLinear()
    .range([width, 0]);

const area = d3.area()
    .x((d, i) => x(i))
    // Add extra spaces between chunks
    .y0(d => Math.max(y(d[0]) - 2, y(d[1])))
    .y1(d => Math.min(y(d[1]) + 2, y(d[0])))
    // .y0(d => y(d[0]))
    // .y1(d => y(d[1]))
    .curve(d3.curveCardinal.tension(0.25));

d3.json('social-summary.json').then((raw) => init(raw));

function init(raw) {
    // console.log(raw);

    const data = []; 
    raw.forEach(d => {
        let entry = {};
        entry.date = d.created_date_bkk;
        parties.forEach(party => { entry[party] = 1; }); // Avoid 0(?)
        d.stats.forEach(dd => { entry[dd.party] = ++dd.total_engagement; });
        data.push(entry);
    });
    x.domain([0, data.length-1]);
    // console.log(data);

    const series = stack(data);
    // console.log(series);

    svg.attr('height', data.length * day_gap_height);
    x.domain([0, data.length-1])
        .range([0, data.length * day_gap_height]);
    y.domain(d3.extent(d3.merge((d3.merge(series)))));
    render(series); 
}

function render(series) { 
    g.selectAll('path')
        .data(series)
        .enter().append('path')
        .attr('d', area)
        .attr('fill', (d,i) => colors[i])
        // Give a smoother look at edges
        .attr('stroke', '#fbf8ed')
        .attr('stroke-width', 3)
        .attr('stroke-opacity', 0.25);
    
    g.selectAll('line')
        .data(d3.range(series[0].length))
        .enter().append('line')
        .classed('grid', true)
        .attr('x1', (d,i) => x(i) + day_gap_height / 2)
        .attr('x2', (d,i) => x(i) + day_gap_height / 2)
        .attr('y1', (d,i) => (i % 7 == 0) ? 0 : 15)
        .attr('y2', (d,i) => (i % 7 == 0) ? width : 35);

    g.attr('transform', `rotate(90 ${width/2} ${width/2})`);
    
}   
