import { Subject } from './Subject';
import { Observer } from './Observer';


export class WeatherData implements Subject<number> {

  private observers: Observer[];
  private change: boolean;
  private temperature: number;


  constructor() {
    this.observers = [];
    this.temperature = 21.5;
    this.change = false;
  }


  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObserver(): void {
    if (this.change) {
      this.observers.forEach(observer => {
        observer.update(this.temperature);
      })

      this.change = false;
    }

  }

  setChanged() {
    // 这个方法可以添加逻辑控制什么情况下更新 observers
    this.change = true;
  }

  // 其他方法
  measurementsChanged() {
    this.setChanged();
    this.notifyObserver();
  }

  setMeasurements(temperature: number) {
    this.temperature = temperature;
    this.measurementsChanged();
  }

}