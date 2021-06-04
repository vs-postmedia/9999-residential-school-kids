import { layoutTextLabel, layoutGreedy,
    layoutLabel, layoutRemoveOverlaps } from 'd3fc-label-layout';
import * as d3 from 'd3';
import css from './weepeople.css';

// VARS
let height, width;
let countX = 0;
let countY = 0;
let lineHeight = 6;
let y = lineHeight;
const maxPerRow = 20;
const figureWidth = 25;
const labelPadding = 2
// const margin = {
// 	top: 10,
// 	right: 5,
// 	bottom: 25,
// 	left: 40
// };
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


const init = (data, el) => {
	const container = d3.select(el);

	// set height & width
	height = ((data.length / figureWidth) * lineHeight) * 9;
	d3.select('#app').style('height', `${height}px`);
	// height = container.style('height').slice(0, -2);
	width = container.style('width').slice(0, -2);

	const svg = container.append('svg')
		.attr('viewbox', [0, 0, width, height])
		.style('height', `${height}px`);

	// people icons
	const figure = svg.append('g')
		.selectAll('text')
		.data(data)
		.enter()
		.append('text')
			.attr('class', 'figure')
			.style('opacity', d => !d.school ? 0.4 : 1)
			.attr('x', (d,i) => {
				countX += 1;
				let x = countX * figureWidth;

				if (x > width) {
					countX = 0;
					x = countX * figureWidth;
				}
				
				return x;
			})
			.attr('dy', d => {
				return `${randomNumber(1, 8)}%`;
			})
			.attr('y', (d,i) => {
				countY += 1;
				if (countY / (width / figureWidth) >= 1) {
					countY = 0;
					y += lineHeight;
				}
				return `${y}rem`;
			});


		figure.append('tspan')
				.text(d => d.school ? d.name : null)
				.attr('class', 'tspan text name')
		figure.append('tspan')
				.text(d => d.school ? `Died ${d.death_date}` : null)
				.attr('dy', 15)
				.attr('dx', -105)
				.attr('class', 'tspan text')
		figure.append('tspan')
				.text(d => `${alphabet[Math.floor(Math.random() * alphabet.length)]} `)
				.attr('class', d => d.school ? 'weepeople bc' : 'weepeople tspan')
			



		// // the component used to render each label
		// const textLabel = layoutTextLabel()
		//   .padding(labelPadding)
		//   .value(d => d.name);

		// // a strategy that combines simulated annealing with removal
		// // of overlapping labels
		// const strategy = layoutRemoveOverlaps(layoutGreedy());

		// // create the layout that positions the labels
		// const labels = layoutLabel(strategy)
		//     .size((d, i, g) => {
		//         // measure the label and add the required padding
		//         const textSize = g[i].getElementsByTagName('text')[0].getBBox();
		//         return [textSize.width + labelPadding * 2, textSize.height + labelPadding * 2];
		//     })
		//     .position(d => projection(d.geometry.coordinates))
		//     .component(textLabel);

		// // render!
		// svg.datum(data)
		//      .call(labels);

	// const container = document.getElementById('app');
	// data.forEach(d => {
	// 	const letter = `${alphabet[Math.floor(Math.random() * alphabet.length)]} `;

	// 	const el = document.createElement('span');

	// 	// BC or not?
	// 	el.className = d.school ? 'weepeople bc' : 'weepeople';
	// 	el.append(letter);
	// 	container.append(el);
	// });
	
};

function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

export { init };