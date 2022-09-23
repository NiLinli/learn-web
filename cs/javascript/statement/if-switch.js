

function testIf() {

    if (i == 25) {
        console.log('25');
    } else if (i == 35) {
        console.log('25');
    } else if (i == 45) {
        console.log('45');
    } else {
        console.log('100');
    }

}

function testSwitch() {
    switch (i) {
        // fall through
        case 25:
        case 35:
            console.log('25');
            break;
        case 45:
            console.log('45');
            break;
        default:
            console.log('100');
    }
}
