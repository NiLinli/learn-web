// 懒汉式
export class LazilySingleton {

  private static instance: LazilySingleton | null = null;

  private constructor() { }

  static getInstance() {
    if (LazilySingleton.instance === null) {
      LazilySingleton.instance = new LazilySingleton();
    }

    return LazilySingleton.instance;
  }

  sayHello() {
    console.log('LazilySingleton say hello')
  }

}