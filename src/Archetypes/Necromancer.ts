import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  static _instace: number;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._instace = 0;
  }

  static createdArchetypeInstances() {
    this._instace += 1;
    return this._instace;
  }

  get energyType(): EnergyType {        
    return this._energyType;
  }
}

export default Necromancer;