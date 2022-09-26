const path = require('path');
const os = require('os');
const fs = require('fs');

fs.mkdtemp(path.join(os.tmpdir(), 'omg'), (err, folder) => {
  if (err) throw err;

  console.log(folder);
});
