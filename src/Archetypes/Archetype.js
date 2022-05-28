"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Archetype {
    constructor(name, special = 0, cost = 0) {
        this.name = name;
        this.special = special;
        this.cost = cost;
        this._name = name;
        this._cost = cost;
        this._special = special;
    }
    static createdArchetypeInstances() {
        throw new Error('Not implemented');
    }
}
exports.default = Archetype;
