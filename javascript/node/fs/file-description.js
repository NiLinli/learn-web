const fs = require('fs');

fs.open('./test.txt', 'r', (err, fd) => {
    if (err) {
        throw err;
    }

    console.log(typeof fd); // number
    console.log(fd);

    fs.fstat(fd, (err, stat) => {
        if (err) {
            throw err;
        }

        console.log(stat);

        fs.close(fd, (err) => {
            if (err) {
                throw err;
            }
        })

    });

});