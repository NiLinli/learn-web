export interface Observer<T = any> {
    update(message: T): void;
}
