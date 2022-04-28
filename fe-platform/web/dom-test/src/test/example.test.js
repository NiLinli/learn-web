
const { 
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  waitFor,
} = require('@testing-library/dom')
const getExampleDOM = require('../getExampleDOM');

test('examples of some things', async () => {
  const famousProgrammerInHistory = 'Ada Lovelace'
  const container = getExampleDOM()

  // Get form elements by their label text.
  // An error will be thrown if one cannot be found (accessibility FTW!)
  const input = getByLabelText(container, 'Username')
  input.value = famousProgrammerInHistory

  // Get elements by their text, just like a real user does.
  getByText(container, 'Print Username').click()

  await waitFor(() =>
    expect(queryByTestId(container, 'printed-username')).toBeTruthy()
  )

  // getByTestId and queryByTestId are an escape hatch to get elements
  // by a test id (could also attempt to get this element by its text)
  expect(getByTestId(container, 'printed-username')).toHaveTextContent(
    famousProgrammerInHistory,
  )
  // jest snapshots work great with regular DOM nodes!
  expect(container).toMatchSnapshot()
})