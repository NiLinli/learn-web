import _ from 'lodash';

function component() {
  // webpackPrefetch: true
  // webpackPreload: true
  return import(/* webpackChunkName: "foo" */ './dynamic-module').then(({ default: foo }) => {
    const element = document.createElement('div');      
    element.innerHTML = foo.name;
    return element;    
    }).catch(error => 'An error occurred while loading the component');
}


component().then(component => {
    document.body.appendChild(component);
})

