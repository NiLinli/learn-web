function h(tag, props, ...children) {
  return {
    tag,
    props: props || {},
    children: children.flat() || []
  }
}

function convertVdom(vdom) {


  if (typeof vdom === 'string' || typeof vdom === 'number') {
    return document.createTextNode(vdom);
  }

  const { tag, props, children } = vdom;

  // 创建元素
  const element = document.createElement(tag);

  // 设置 props
  setProps(element, props);

  // 创建子元素

  children.map((item) => convertVdom(item))
    .forEach((childElement) => element.appendChild(childElement));

  return element;
}

function setProps(element, props) {

  for (const k in props) {
    if (props.hasOwnProperty(k)) {
      const propValue = props[k];
      element.setAttribute(k, propValue);
    }
  }
}