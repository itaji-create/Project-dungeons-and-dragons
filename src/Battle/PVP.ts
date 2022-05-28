import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _player2: Fighter;

  constructor(char1: Fighter, char2: Fighter) {
    super(char1);
    this._player2 = char2;
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player2.attack(this.player);
      this.player.attack(this._player2);
      this.player.attack(this._player2);
      this._player2.attack(this.player);
    }
    return super.fight();
  }
}

export default PVP;