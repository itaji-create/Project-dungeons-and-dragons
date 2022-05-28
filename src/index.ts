import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

export const player1: Character = new Character('player1');
export const player2: Character = new Character('player2');
export const player3: Character = new Character('player3');

export const monster1: Monster = new Monster();
export const monster2: Dragon = new Dragon();

player1.levelUp();
player1.levelUp();
player1.levelUp();

export const pvp: PVP = new PVP(player2, player3);

export const pve: PVE = new PVE(player1, [monster1, monster2]);

export function runBattles(battles: Battle[]) {
  for (let i = 0; i < battles.length; i += 1) {
    const battle = battles[i];
    battle.fight();
  }
}