// add a variable oject to the front of the scope chain
let obj = {
    name: 'nixixi',
    age: 18
};


function buildDescription(){
    let name = 'heheda';
    let age = 20;
    let hobbits = 'basketball';

    let des;

    with(obj){
        // obj iteself is added to the front of the scope chain
        des = `${name} is ${age} years old , like playing ${hobbits}`;
    }

    return des;
}

console.log(buildDescription());
