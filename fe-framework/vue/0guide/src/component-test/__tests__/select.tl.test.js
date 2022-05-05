import { render, fireEvent } from '@testing-library/vue';
import Select from '../Select.vue';
import userEvent from '@testing-library/user-event';

test('properly handles v-model', async () => {
  const { getByDisplayValue } = render(Select);
  const select = getByDisplayValue('Tyrannosaurus');
  expect(select.value).toBe('dino1');

  await userEvent.selectOptions(select, 'dino2');
  expect(select.value).toBe('dino2');

  await userEvent.selectOptions(select, 'dino3');
  expect(select.value).not.toBe('dino2');
  expect(select.value).toBe('dino3');
});
