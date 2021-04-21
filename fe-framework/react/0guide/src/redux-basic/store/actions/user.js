export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_AGE = 'CHANGE_AGE';

// Action creator 可以选择选择返回不同 action
export function changeUser(key, value) {
  if (key === 'name') {
    return {
      type: CHANGE_NAME,
      payload: value,
    };
  } else if (key === 'age') {
    return {
      type: CHANGE_AGE,
      payload: value,
    };
  }
}
