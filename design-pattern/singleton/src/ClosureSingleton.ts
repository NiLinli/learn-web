export const ClosureSingleton = (function () {
    //实例保持了Singleton的引用
    let instance: A | null;

    class A {
        sayHello() {
            console.log("ClosureSingleton say hello")
        }
    }

    return {
        getInstance() {
            if (!instance) {
                instance = new A();
            }
            return instance;
        }
    };
})();

