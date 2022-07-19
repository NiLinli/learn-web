// module "@types/lodash/index"
import * as _ from 'lodash';

// module "date-fns"
// package.json 中  "typings": "./typings.d.ts",
import { format } from 'date-fns';

// module "./foo.module"
// 查找顺序
// 1. .ts
// 2. .d.ts
import { Foo } from './foo.module';

_.padStart('Hello TypeScript!', 20, ' ');

new Foo();

format(new Date(), 'YYYY-MM-DD');

// global.d.ts 中声明
myLib('123');

// bar.ts 中声明
a.toLowerCase();
const bar: Bar = {
  key1: '123',
  key2: 123,
};

// baz.ts 中声明
b.toLowerCase();

// types: ["vite/client"]
import.meta.env;