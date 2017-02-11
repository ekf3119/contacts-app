
// 3/ 2. Using ReactDOM, we insert our representation, called a "react element", into our DOM tree
// ReactDOM.render(element, container, [callback])

ReactDOM.render(
// 3/ 1. Using pure JavaScript we use createElement to create a representation of our DOM node
// component is either a DOM component or Custom Component
//-- React.createElement(component, [props], [...children])
  React.createElement('div', {}, 'Albert Einstein'),
  document.getElementById('root')
)