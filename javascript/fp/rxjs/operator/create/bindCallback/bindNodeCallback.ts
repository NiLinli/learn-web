import { bindCallback, bindNodeCallback } from 'rxjs';
import { } from 'rxjs/operators';
import { observerTest } from '../../common';
import fs = require('fs');
import path = require('path');

// bindCallback -> callback(err, result)

const readFile$ = bindNodeCallback(fs.readFile);

readFile$('fdkjsahfklsjaf').subscribe(observerTest);

readFile$(path.join(__dirname, './bindCallback.ts')).subscribe(observerTest);

// error -> error 回调
// success -> next 回调并且完成