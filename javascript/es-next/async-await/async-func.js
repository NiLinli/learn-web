function resolveAfter2Seconds() {
    console.log('starting 2s promise');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(20);
            console.log('2s promise is done');
        }, 2000);
    });
}

function resolveAfter1Seconds() {
    console.log('starting 1s promise');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10);
            console.log('1s promise done');
        }, 1000);
    });
}

module.exports = {
    resolveAfter1Seconds,
    resolveAfter2Seconds
}