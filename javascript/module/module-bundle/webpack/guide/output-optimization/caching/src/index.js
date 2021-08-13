import _ from 'lodash';
// import printMe from './print.js';

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');

	btn.innerHTML = _.join(['halo', 'webpack'], ' ');;
	// btn.onclick = printMe;
	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());