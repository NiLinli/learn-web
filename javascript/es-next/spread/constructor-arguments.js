function _construct(Parent, args) { 
  _construct = function _construct(Parent, args) { 
    var a = [null];
    a.push.apply(a, args); 
    var Constructor = Function.bind.apply(Parent, a);
    var instance = new Constructor(); 
      
    return instance; 
  };
    
  return _construct.apply(null, arguments); 
}

const args = [2005, 9, 20];

const d1 = _construct(Date, args);
const d2 = new Date(...args);

console.log(d1.valueOf());
console.log(d2.valueOf());

