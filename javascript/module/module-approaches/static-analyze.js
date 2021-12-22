// commonjs/ require
const foo = require(`all/${['f', 'o', 'o'].join('')}`);
const bar = require('all/BAR'.toLowerCase);


// esm
import foo from 'all/foo';
import bar from 'all/bar';

