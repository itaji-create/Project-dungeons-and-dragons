import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static _instance: number;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances() {
    if (this._instance === undefined) this._instance = 0;

    this._instance += 1;
    return this._instance;
  }

  get energyType(): EnergyType {        
    return this._energyType;
  }
}
export default Ranger;