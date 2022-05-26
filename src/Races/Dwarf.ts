import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instace: number = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    this._instace += 1;
    return this._instace;
  }
}

export default Dwarf;