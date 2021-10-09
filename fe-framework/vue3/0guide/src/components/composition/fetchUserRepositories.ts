export default function fetchUserRepositories(user: string): Promise<Object[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ warehouseName: '汉川分拣仓' }]);
    }, 1000);
  });
}
