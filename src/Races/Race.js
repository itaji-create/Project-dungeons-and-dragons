"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Race {
    constructor(name, dexterity) {
        this.name = name;
        this.dexterity = dexterity;
        this._name = name;
        this._dexterity = dexterity;
    }
    static createdRacesInstances() {
        throw new Error('Not implemented');
    }
}
exports.default = Race;
