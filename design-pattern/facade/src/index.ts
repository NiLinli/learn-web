import { HomeTheaderFacade } from './HomeTheaderFacade';
import { Player } from './Player';
import { Screen } from './Screen';
import { Tuner } from './Tuner';

const homeTheader = new HomeTheaderFacade(new Player(), new Screen(), new Tuner());

homeTheader.watchMoive();

setTimeout(() => homeTheader.endMovie(), 5000);
