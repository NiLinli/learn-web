let language = {
  set current(name) {
    // name 为用于保存尝试分配给 prop 的值的变量的一个别名
    this.log.push(name);
  },
  get current() {
    return this.log[this.log.length - 1];
  },
  log: []
};

language.current = 'EN'; // 调用set 
console.log(language);

language.current = 'FA'; // 调用 set
console.log(language);
console.log(language.current); // 调用 get

let obj = {
    temp: {},
    set mutabelVar(tmpobj) {
        console.log(JSON.stringify(tmpobj) + ' set');
        this.temp = tmpobj;
    },
    get mutabelVar() {
        return this.temp;
    }
};

obj.mutabelVar = { name: 'nixix' }; // 调用 setter
obj.mutabelVar.name = 'nixixi1'; // 可变对象, 不调用setter

console.log(obj.mutabelVar);