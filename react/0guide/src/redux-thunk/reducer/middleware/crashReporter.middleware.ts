import { Store } from 'redux';


export const crashReporter = (store: Store) => (next: any) => (action: any) => {
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err)
        //  做一些报告
        throw err
    }
}