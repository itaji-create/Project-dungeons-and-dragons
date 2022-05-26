import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static _instace: number;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._instace = 0;
  }

  static createdArchetypeInstances() {
    this._instace += 1;
    return this._instace;
  }

  get energyType(): EnergyType {     
    return this._energyType;
  }
}

export default Warrior;