"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'mana';
        this._energyType = 'mana';
    }
    static createdArchetypeInstances() {
        if (this._instance === undefined)
            this._instance = 0;
        this._instance += 1;
        return this._instance;
    }
    get energyType() {
        return this._energyType;
    }
}
exports.default = Necromancer;
