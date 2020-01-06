export interface FlyBehavior {
  fly(): void;
}

class FlyWithWings {
  fly() {
    console.log('Duck fly with swing.');
  }
}

class FlyNoWay {
  fly() {
    console.log('Duck can not fly.');
  }
}

export { FlyWithWings, FlyNoWay };