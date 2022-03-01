import { ComputerBuilder } from './ComputerBuilder';
import { Computer } from '../product/Computer';
import { Keyboard } from '../product/Keyboard';

export class MacComputerBuilder extends ComputerBuilder {

  computer: Computer;

  constructor(cpu: string, ram: string) {

    super();
    this.computer = new Computer(cpu, ram);
  }

  setUsbType(usbType: string): void {
    this.computer.setUsbType(usbType);
  }

  setKeyboard(type: string): void {
    this.computer.setKeyboard(new Keyboard(type));
  }

  getComputer(): Computer {
    return this.computer;
  }

}