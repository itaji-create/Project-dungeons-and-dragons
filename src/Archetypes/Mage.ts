import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  static _instace: number;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._instace = 0;
  }

  static createdArchetypeInstances() {
    this._instace += 1;
    return this._instace;
  }

  get energyType(): EnergyType {        
    return this._energyType;
  }
}

export default Mage;