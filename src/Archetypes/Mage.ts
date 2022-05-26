import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  static _instace: number = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
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