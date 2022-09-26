export function travel(it: Iterator<any>) {
  let result = it.next();
  while (!result.done) {
    console.log(result.value);
    result = it.next();
  }
}
