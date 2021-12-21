const { screen, fireEvent } = require('@testing-library/dom');
const { default: userEvent } = require('@testing-library/user-event');

// console.log(userEvent)

document.body.innerHTML = `
<label for="example">Check</label>
  <input id="example" type="checkbox" />
`;

test('click', () => {
  userEvent.click(screen.getByText('Check'));
  // fireEvent.click(screen.getByText('Check'))
  expect(screen.getByLabelText('Check')).toBeChecked();
});
