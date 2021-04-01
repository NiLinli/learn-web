import AsyncComponent from './async-component';

export function getAsyncComponentOptions() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(AsyncComponent);
    }, 5000);
  });
}
