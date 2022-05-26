import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;
  constructor(
    readonly name: string,
    readonly special: number = 0,
    readonly cost: number = 0,
  ) {
    this._name = name;
    this._cost = cost;
    this._special = special;
  }

  static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;