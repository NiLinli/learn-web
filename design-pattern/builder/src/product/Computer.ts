import { Keyboard } from './Keyboard'

// Product
export class Computer {

  private cpu: string;
  private ram: string;

  private usbType: string | undefined;
  private keyboard: Keyboard | undefined;

  constructor(cpu: string, ram: string) {
    this.cpu = cpu;
    this.ram = ram;
  }


  setUsbType(usbType: string) {
    this.usbType = usbType;
  }

  setKeyboard(keyboard: Keyboard) {
    this.keyboard = keyboard;
  }

  display() {
    console.log(JSON.stringify(this))
  }

}