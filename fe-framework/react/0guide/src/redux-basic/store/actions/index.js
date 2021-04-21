export const LOG_OUT = 'LOG_OUT';

export function logout() {
  return {
    type: LOG_OUT,
    payload: true,
  };
}
