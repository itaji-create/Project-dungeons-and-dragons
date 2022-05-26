import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static _instace: number = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
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