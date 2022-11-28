import React, {useRef,useEffect} from 'react'
import * as d3 from "d3";

import aapl from './aapl.json'
import { useState } from 'react'
export default function Linechart() {
  const [data] = useState([
    { date: 1589932800, totalLiquidityUSD: 54026260.37322 },
    { date: 1589932800, totalLiquidityUSD: 54026260.37322 },
    { date: 1589932800, totalLiquidityUSD: 54026260.37322 },
    { date: 1589932800, totalLiquidityUSD: 54026260.37322 },
  
  
  
  ]);
const svgRef = useRef()

useEffect(()=>{

// setting up svg
// const w = 1000;
// const h = 500;
// const svg = d3.select(svgRef.current)
//       .attr('width',w)
//       .attr('height',h)
//       .style('background','#d3d3d3')
//       .style('overflow','visible');

// //setting up scale
// const xScale = d3.scaleLinear()
//      .domain([0, data.date.length ])
//      .range([0,w]);
// const yScale = d3.scaleLinear()
//      .domain([0,1000])
//      .range([h,0])
// const generateScaledLine = d3.line()
// .x((d,i)=> xScale(i))
// .y( yScale)
// .curve(d3.curveCardinal);

        
// //setting up the axis
// const xAxis = d3.axisBottom(xScale)
// .ticks(data)

// const yAxis = d3.axisLeft(yScale)
// .ticks(15);
// svg.append('g')
// .call(xAxis)
// .attr('transform', `translate(0, ${h})`)
// svg.append('g')
// .call(yAxis)

// // setting up the data of svg
// svg.selectAll('.line')
// .data([data.date])
// .join('path')
// .attr('d',d=>generateScaledLine(d))
// .attr('fill', 'none')
// .attr('stroke' , 'black')


// xxxxxxxxxxxxxxxxxxxxxxxxxx

  // set the dimensions and margins of the graph
  const margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 760 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  //Read the data
  d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv",

    // When reading the csv, I must format variables:
    function (d) {
      return { date: d3.timeParse("%Y-%m-%d")(d.date), value: d.value }
    }).then(

      // Now I can use this dataset:
      function (data) {

        // Add X axis --> it is a date format
        const x = d3.scaleTime()
          .domain(d3.extent(data, function (d) { return d.date; }))
          .range([0, width]);
        svg.append("g")
          .attr("transform", `translate(0, ${height})`)
          .call(d3.axisBottom(x));

        // Add Y axis
        const y = d3.scaleLinear()
          .domain([0, d3.max(data, function (d) { return +d.value; })])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));

        // Add the line
        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          .attr("d", d3.line()
            .x(function (d) { return x(d.date) })
            .y(function (d) { return y(d.value) })
          )

      })

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


  // Copyright 2021 Observable, Inc.
  // Released under the ISC license.
  // https://observablehq.com/@d3/line-chart
//   function LineChart(data, {
//     x = ([x]) => x, // given d in data, returns the (temporal) x-value
//     y = ([y]) => y, // given d in data, returns the (quantitative) y-value
//     defined, // for gaps in data
//     curve = d3.curveLinear, // method of interpolation between points
//     marginTop = 20, // top margin, in pixels
//     marginRight = 30, // right margin, in pixels
//     marginBottom = 30, // bottom margin, in pixels
//     marginLeft = 40, // left margin, in pixels
//     width = 640, // outer width, in pixels
//     height = 400, // outer height, in pixels
//     xType = d3.scaleUtc, // the x-scale type
//     xDomain, // [xmin, xmax]
//     xRange = [marginLeft, width - marginRight], // [left, right]
//     yType = d3.scaleLinear, // the y-scale type
//     yDomain, // [ymin, ymax]
//     yRange = [height - marginBottom, marginTop], // [bottom, top]
//     yFormat, // a format specifier string for the y-axis
//     yLabel, // a label for the y-axis
//     color = "currentColor", // stroke color of line
//     strokeLinecap = "round", // stroke line cap of the line
//     strokeLinejoin = "round", // stroke line join of the line
//     strokeWidth = 1.5, // stroke width of line, in pixels
//     strokeOpacity = 1, // stroke opacity of line
//   } = {}) {
//     // Compute values.
//     const X = d3.map(data, x);
//     const Y = d3.map(data, y);
//     const I = d3.range(X.length);
//     if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
//     const D = d3.map(data, defined);

//     // Compute default domains.
//     if (xDomain === undefined) xDomain = d3.extent(X);
//     if (yDomain === undefined) yDomain = [0, d3.max(Y)];

//     // Construct scales and axes.
//     const xScale = xType(xDomain, xRange);
//     const yScale = yType(yDomain, yRange);
//     const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
//     const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);

//     // Construct a line generator.
//     const line = d3.line()
//       .defined(i => D[i])
//       .curve(curve)
//       .x(i => xScale(X[i]))
//       .y(i => yScale(Y[i]));

//     const svg = d3.select("#my_dataviz")
//       .attr("width", width)
//       .attr("height", height)
//       .attr("viewBox", [0, 0, width, height])
//       .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

//     svg.append("g")
//       .attr("transform", `translate(0,${height - marginBottom})`)
//       .call(xAxis);

//     svg.append("g")
//       .attr("transform", `translate(${marginLeft},0)`)
//       .call(yAxis)
//       .call(g => g.select(".domain").remove())
//       .call(g => g.selectAll(".tick line").clone()
//         .attr("x2", width - marginLeft - marginRight)
//         .attr("stroke-opacity", 0.1))
//       .call(g => g.append("text")
//         .attr("x", -marginLeft)
//         .attr("y", 10)
//         .attr("fill", "currentColor")
//         .attr("text-anchor", "start")
//         .text(yLabel));

//     svg.append("path")
//       .attr("fill", "none")
//       .attr("stroke", color)
//       .attr("stroke-width", strokeWidth)
//       .attr("stroke-linecap", strokeLinecap)
//       .attr("stroke-linejoin", strokeLinejoin)
//       .attr("stroke-opacity", strokeOpacity)
//       .attr("d", line(I));

//     return svg.node();
//   }
//   // aapl = FileAttachment("aapl.csv").csv({ typed: true })
//  var chart = LineChart(aapl, {
//     x: d => d.date,
//     y: d => d.close,
//     yLabel: "↑ Daily close ($)",
//     width:600,
//     height: 500,
//     color: "steelblue"
//   })

},[data])



return(
  <div className="graph" id="my_dataviz">
 {/* <svg ref={svgRef}></svg> */}
  </div>
)
}


