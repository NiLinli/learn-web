import { ComputerDirector } from './ComputerDirector';
import { MacComputerBuilder } from './builder/MacComputerBuilder';


const builder2016 = new MacComputerBuilder('i5', '4g');
const director = new ComputerDirector(builder2016);
const computer = director.getComputerWithKeyboard();
computer.display();


const builder2022 = new MacComputerBuilder('i7', '16g');
const director2022 = new ComputerDirector(builder2022);
const computer2022 = director2022.getComputerWithoutKeyboard();
computer2022.display();