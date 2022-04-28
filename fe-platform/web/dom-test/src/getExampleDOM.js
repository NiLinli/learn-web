// 测试生成 DOM 的函数
function getExampleDOM() {
  const div = document.createElement('div');
  div.innerHTML = `
    <label for="username">Username</label>
    <input id="username" />
    <button>Print Username</button>
  `;
  const button = div.querySelector('button');
  const input = div.querySelector('input');
  button.addEventListener('click', () => {
    setTimeout(() => {
      const printedUsernameContainer = document.createElement('div');
      printedUsernameContainer.innerHTML = `
        <div data-testid="printed-username">${input.value}</div>
      `;
      div.appendChild(printedUsernameContainer);
    }, Math.floor(Math.random() * 200));
  });
  return div;
}

module.exports = getExampleDOM;
