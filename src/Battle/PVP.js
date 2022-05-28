"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(char1, char2) {
        super(char1);
        this._player2 = char2;
    }
    fight() {
        while (this.player.lifePoints > 0 && this._player2.lifePoints > 0) {
            this._player2.attack(this.player);
            this.player.attack(this._player2);
            this.player.attack(this._player2);
            this._player2.attack(this.player);
        }
        return super.fight();
    }
}
exports.default = PVP;
