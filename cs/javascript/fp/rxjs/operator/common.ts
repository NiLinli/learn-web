import { Observer } from 'rxjs'

export const observerTest: Observer<any> = {
    next: (value) => console.log(value),
    error: (error) => console.log(`error -> ${error}`),
    complete: () => console.log('complete')
};