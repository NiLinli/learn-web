function sayHello() {
    console.log('function sayHello');
    say('hello world');
}

function say(str) {
    console.log('function say');
    console.log(str);
}

function main() {
    console.log('function main');
    sayHello();
}

main();

// stack