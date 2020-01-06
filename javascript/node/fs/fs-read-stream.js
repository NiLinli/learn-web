const fs = require('fs');

const rs = fs.createReadStream('./response');

rs.on('open', () => {
    console.log('open');

});

rs.on('readable', () => {
    console.log('readable');
    console.log(rs.read())
    console.log(rs.bytesRead);
});

rs.on('end', () => {
    console.log('end');
});

rs.on('close', () => {
    console.log('close');
});

