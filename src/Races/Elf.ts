import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static _instance: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    if (this._instance === undefined) this._instance = 0;
    this._instance += 1;
    return this._instance;
  }
}

export default Elf;