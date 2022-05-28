"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(player, monsters) {
        super(player);
        this._environment = monsters;
    }
    fight() {
        for (let i = 0; i < this._environment.length; i += 1) {
            const enemy = this._environment[i];
            while (this.player.lifePoints > 0 && enemy.lifePoints > 0) {
                enemy.attack(this.player);
                this.player.attack(enemy);
            }
        }
        return super.fight();
    }
}
exports.default = PVE;
