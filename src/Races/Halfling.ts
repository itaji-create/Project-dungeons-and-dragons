import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static _instace: number = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instace += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling._instace;
  }
}

export default Halfling;