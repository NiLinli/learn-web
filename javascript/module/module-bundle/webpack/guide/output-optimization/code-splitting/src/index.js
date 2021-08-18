import { foo } from './lib/utils';
import { fooDate } from './lib/date';
import _ from 'lodash';


_.random();

foo(1, 2, 3);
fooDate(1, 2, 3);

function component() {
  // webpackPrefetch: true
  // webpackPreload: true
  return import(/* webpackChunkName: "foo" */ './modules/dynamic-module')
    .then(({ default: foo }) => {
      var element = document.createElement('div');
      element.innerHTML = foo.name;
      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
}

function component2() {
  // webpackPrefetch: true
  // webpackPreload: true
  return import(/* webpackChunkName: "foo2" */ './modules/dynamic-module-2')
    .then(({ default: foo }) => {
      var element = document.createElement('div');
      element.innerHTML = foo.name;
      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
}

component().then((component) => {
  document.body.appendChild(component);
});

component2().then((component) => {
  document.body.appendChild(component);
});
