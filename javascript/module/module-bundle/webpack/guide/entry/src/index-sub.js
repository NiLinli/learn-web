import join from './lib/join';

function component() {
	var element = document.createElement('div');

	element.innerHTML = join(['halo', 'webpack'], ' ');
	return element;
}

document.body.appendChild(component());