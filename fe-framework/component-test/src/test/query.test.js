const { screen, getByLabelText } = require('@testing-library/dom');

// screen => document.body

document.body.innerHTML = `
  <label for="example">Example</label>
  <input id="example" />
`;

test('test query', () => {
  const inputElement = screen.getByLabelText('Example');
  // const inputElement = getByLabelText(document.body, 'Example');

  expect(inputElement).toHaveAttribute('id', 'example');
});
