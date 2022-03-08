import { Player } from './Player';
import { Screen } from './Screen';
import { Tuner } from './Tuner';

export class HomeTheaderFacade {
  constructor(public player: Player, public screen: Screen, public tuner: Tuner) {}

  watchMoive() {
    this.player.on();
    this.screen.down();
    this.tuner.on();
  }

  endMovie() {
    this.player.off();
    this.screen.up();
    this.tuner.off();
  }

  // ...
}
