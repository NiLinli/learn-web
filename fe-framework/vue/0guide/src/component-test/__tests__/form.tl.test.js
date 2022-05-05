import { render, fireEvent } from '@testing-library/vue';
import Form from '../Form.vue';
import userEvent from '@testing-library/user-event';

test('properly handles v-model', async () => {
  const { getByLabelText, getByText } = render(Form);

  getByText('Hi, my name is Nixixi');

  const usernameInput = getByLabelText(/username/i);

  await fireEvent.update(usernameInput, 'Nixixi2');

  getByText('Hi, my name is Nixixi2');
});
