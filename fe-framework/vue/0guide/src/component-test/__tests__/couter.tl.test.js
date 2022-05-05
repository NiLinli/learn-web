import { render, fireEvent } from '@testing-library/vue';
import Counter from '../Counter.vue';
import userEvent from '@testing-library/user-event';

test('increments value on click', async () => {
  
  const { getByText } = render(Counter);

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  getByText('Times clicked: 0');

  const button = getByText(/increment/i);

  // Dispatch a native click event to our button element.
  await userEvent.click(button);
  await userEvent.click(button);

  getByText('Times clicked: 2');
});
