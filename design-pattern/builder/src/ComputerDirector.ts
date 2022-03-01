import { ComputerBuilder } from "./builder/ComputerBuilder";
import { Computer } from "./product/Computer";


export class ComputerDirector {

  constructor(private builder: ComputerBuilder) {
    this.builder = builder;
  }



  getComputerWithKeyboard(): Computer {
    this.builder.setKeyboard('logic');
    this.builder.setUsbType('typec');
    return this.builder.getComputer();
  }

  getComputerWithoutKeyboard() { 
    this.builder.setUsbType('usb2.0');
    return this.builder.getComputer();
  }


}