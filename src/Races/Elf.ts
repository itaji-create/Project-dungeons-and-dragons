import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static _instace: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instace = 0;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    this._instace += 1;
    return this._instace;
  }
}

export default Elf;