"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
const utils_1 = require("./utils");
class Character {
    constructor(name, race = new Races_1.Elf(name, (0, utils_1.default)(1, 10)), archetype = new Archetypes_1.Mage(name)) {
        this.name = name;
        this._race = race;
        this._archetype = archetype;
        this._maxLifePoints = this._race.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._strength = (0, utils_1.default)(1, 10);
        this._defense = (0, utils_1.default)(1, 10);
        this._dexterity = this._race.dexterity;
        this._energy = {
            type_: this._archetype.energyType,
            amount: (0, utils_1.default)(1, 10),
        };
    }
    get race() {
        return this._race;
    }
    get archetype() {
        return this._archetype;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get dexterity() {
        return this._dexterity;
    }
    get energy() {
        return Object.assign({}, this._energy);
    }
    get strength() {
        return this._strength;
    }
    get defense() {
        return this._defense;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
    special(enemy) {
        this._maxLifePoints += 10;
        enemy.receiveDamage(40);
    }
    levelUp() {
        this._maxLifePoints += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        this._strength += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        if (this._energy)
            this._energy.amount = 10;
        if (this._maxLifePoints > this._race.maxLifePoints) {
            this._maxLifePoints = this._race.maxLifePoints;
        }
        this._lifePoints = this._maxLifePoints;
    }
    receiveDamage(attackPoints) {
        const damage = this._defense - attackPoints;
        if (damage < 1) {
            this._lifePoints += damage;
        }
        if (this._lifePoints === 0 || this._lifePoints < 1)
            this._lifePoints = -1;
        return this._lifePoints;
    }
}
exports.default = Character;
