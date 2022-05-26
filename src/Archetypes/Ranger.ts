import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static _instace: number;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._instace = 0;
  }

  static createdArchetypeInstances() {
    this._instace += 1;
    return this._instace;
  }

  get energyType(): EnergyType {        
    return this._energyType;
  }
}
export default Ranger;