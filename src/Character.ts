import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _race: Race;
  private _archetype: Archetype;

  constructor(
    readonly name: string,
    race: Race = new Elf(name, getRandomInt(1, 10)),
    archetype: Archetype = new Mage(name),
  ) {
    this._race = race;
    this._archetype = archetype;
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }
  
  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  public get strength(): number {
    return this._strength;
  }
  
  public get defense() : number {
    return this._defense;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: SimpleFighter): void {
    this._maxLifePoints += 10;
    enemy.receiveDamage(40);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    if (this._energy) this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._defense - attackPoints;
    if (damage < 1) {
      this._lifePoints += damage;
    }
    if (this._lifePoints === 0 || this._lifePoints < 1) this._lifePoints = -1;
    return this._lifePoints;
  }
}

export default Character;