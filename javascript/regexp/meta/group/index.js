let persons = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

// index
const regexp = /First_Name: (\w+), Last_Name: (\w+)/gm;

// named => groups 会有数据
const regexp_named = /First_Name: (?<first>\w+), Last_Name: (?<last>\w+)/gm;

// non capturing group => 不生成 group 性能好
const regexp_non_capturing = /First_Name: (?:\w+), Last_Name: (?:\w+)/gm;

console.log([...persons.matchAll(regexp)], '---');
console.log([...persons.matchAll(regexp_named)], '---');
console.log([...persons.matchAll(regexp_non_capturing), '---']);

// let array;
// while ((array = regexp.exec(persons)) !== null) {
//   console.log(array);
// }


