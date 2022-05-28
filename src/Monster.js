"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monster {
    constructor() {
        this._lifePoints = 85;
        this._strength = 63;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
    receiveDamage(attackPoints) {
        this._lifePoints -= attackPoints;
        if (this._lifePoints === 0 || this._lifePoints < 1)
            this._lifePoints = -1;
        return this._lifePoints;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
}
exports.default = Monster;
