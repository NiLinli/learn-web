function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 500);
    });
}

async function testAwait() {
    // fulfilled
    var x = await resolveAfter2Seconds(10);
    console.log(x);
    // not a promise
    const y = await 20;
    console.log(y);
    // reject
    try {
        var z = await Promise.reject('this is a horrible error');
    } catch (e) {
        console.log(e);
    }
}


testAwait();