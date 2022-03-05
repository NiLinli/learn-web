import { Dog } from './Dog';

function main() {
  const bg1 = new Dog('bage');

  const bg2 = bg1.clone();

  console.log(bg1.wangwang());
  console.log(bg2.wangwang());
}

main();
