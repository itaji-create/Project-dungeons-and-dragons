import Orc from './Orc';
import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static _instace: number = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instace += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf._instace;
  }
}

export default Elf;