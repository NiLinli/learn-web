import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class ConditonsDisplay implements Observer {

  constructor(public weatherData: Subject<number>, public displayName: string) {
    this.weatherData.registerObserver(this);
  }

  update(temperature: number) {
    console.log(`temperature is ${temperature} in ${this.displayName}`);
  }
}