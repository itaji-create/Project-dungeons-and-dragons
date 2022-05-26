import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static _instace: number = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instace += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._instace;
  }
}

export default Dwarf;