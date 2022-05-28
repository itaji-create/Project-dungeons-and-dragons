"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../../src");
const Battle_1 = require("../../src/Battle");
class B extends Battle_1.default {
}
class F {
    constructor(lifePoints = 10, strength = 10, defense = 10) {
        this.lifePoints = lifePoints;
        this.strength = strength;
        this.defense = defense;
    }
    levelUp() { }
    special(enemy) { }
    attack(enemy) { }
    receiveDamage(amount) { }
}
const b = new B(new F());
const result = () => {
    (0, src_1.runBattles)([src_1.pve, src_1.pvp, b]);
    let res = true;
    if (src_1.player1.lifePoints !== -1) {
        if (src_1.monster1.lifePoints !== -1 && src_1.monster2.lifePoints !== -1)
            res = false;
    }
    if (src_1.player2.lifePoints !== -1 && src_1.player3.lifePoints !== -1)
        res = false;
    return res;
};
