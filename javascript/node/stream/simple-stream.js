const fs = require('fs');

let contents = '';

let rs = fs.createReadStream('./simple-stream.js');

rs.on('readable', function () {
    let str;
    let d = rs.read();

    if (d) {
        if (typeof d === 'string') {
            str = d;
        } else if (typeof d === 'object' && d instanceof Buffer) {
            str = d.toString('utf-8');
        }

        if (str) {
            contents += str;
        }
    }
});


rs.on('end', function () {
    console.log(`read in the file content :
    ${contents}
    `);

});