import { init, toVNode, attributesModule, styleModule, eventListenersModule, h, classModule, propsModule } from '../node_modules/snabbdom/build/index.js';

const patch = init([
  classModule,          // class
  styleModule,          // style
  attributesModule,     // attrs
  propsModule,          // props
  eventListenersModule  // on
]);

const container = document.getElementById('container');

const vnode = h(
  'div#container.two.classes',
  {
    on: {
      click: () => {
        console.log(vnode);
      },
    },
    // Hooks are a way to hook into the lifecycle of DOM nodes. 
    hook: {
      
    }
  },
  [
    h('span', { style: { fontWeight: 'bold' } }, 'This is bold'),
    ' and this is just normal text',
    h('a',  { props: { href: '/foo' } }, ' I\'ll take you places!')
  ]
);

// patch into empty DOM element 
// this modifies the DOM as a side effect
// patch(container, vnode);
// 等同于
patch(toVNode(container), vnode)

const newVnode = h(
  'div',
  { 
    class: {
      active: true,
      selected: false
    },
    attrs: {
      id: 'container2'
    },
    on: { 
      click: () => { 
        console.log(newVnode);
      } 
    } 
  },
  [
    h(
      'span',
      { 
        style: { 
          fontWeight: 'normal',
          fontStyle: 'italic'
        }
      },
      'This is now italic type'
    ),
    ' and this is still just normal text',
    h('a', { 
        props: { 
          href: '/bar'
        } 
      },
      'I\'ll take you places!'
    ),
  ]
);

setTimeout(() => {
  // Snabbdom efficiently updates the old view to the new state
  patch(vnode, newVnode);
}, 5000);


// thunk function
// 封装一层创建 vnode 的方式
// 组件早期模型
function numberView(n) {
  return h('div', 'Number is: ' + n);
}

function render(state) {
  return thunk('num', numberView, [state.number]);
}



