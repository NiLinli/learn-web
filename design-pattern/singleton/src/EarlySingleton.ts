// 饿汉式
export class EarlySingleton {

  private static instance: EarlySingleton = new EarlySingleton();

  private constructor() { }

  static getInstance() {
    return EarlySingleton.instance;
  }

  sayHello() {
    console.log('EarlySingleton say hello')
  }

}