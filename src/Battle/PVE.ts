import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _environment: SimpleFighter[];
  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._environment = monsters;
  }

  fight(): number {
    for (let i = 0; i < this._environment.length; i += 1) {
      const enemy = this._environment[i];
      while (this.player.lifePoints > 0 && enemy.lifePoints > 0) {
        enemy.attack(this.player);
        this.player.attack(enemy);
      }
    }
    return super.fight();
  }
}

export default PVE;