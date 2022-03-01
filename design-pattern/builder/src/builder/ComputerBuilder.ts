import { Computer } from '../product/Computer';
import { Keyboard } from '../product/Keyboard';

// 隐藏了产品的内部表现
export abstract class ComputerBuilder {

  abstract setUsbType(usbType: string): void;
  abstract setKeyboard(type: string): void;

  abstract getComputer(): Computer;
}