export interface QuackBehavior {
  quack(): void;
}

class Quack implements QuackBehavior {
  quack() {
    console.log('Duck is really quack!!!');
  }
}

class Squack implements QuackBehavior {
  quack() {
    console.log('Duck is squack!!!');
  }
}

class MuteQuack implements QuackBehavior {
  quack() {
    console.log('Duck is MuteQuack!!!');
  }
}

export { Quack, Squack, MuteQuack };