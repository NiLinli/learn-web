import { Observable, fromEvent } from 'rxjs';


let source: Observable<any> = fromEvent(document.body, 'click');

source.subscribe({
    next: function (value) {
        console.log(value)
    },
    complete: function () {
        console.log('complete!');
    },
    error: function (error) {
        console.log(error)
    }
});

// MouseEvent {...}