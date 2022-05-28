import Fighter, { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;

    if (this._lifePoints === 0 || this._lifePoints < 1) return -1;
    return this._lifePoints;
  }
  
  public get lifePoints(): number {
    return this._lifePoints;
  }
  
  public get strength(): number {
    return this._strength;
  }
}

export default Monster;