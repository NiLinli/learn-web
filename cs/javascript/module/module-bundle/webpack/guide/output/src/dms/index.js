import printMe from '../lib/print';

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');

	btn.innerHTML = 'DMS Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());