import { SimpleFighter } from './Fighter';

const LIFE_POINTS_MONSTER = 85;
const STRENGTH_POINTS_MONSTER = 63;

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = LIFE_POINTS_MONSTER;
    this._strength = STRENGTH_POINTS_MONSTER;
  }

  get lifePoints():number { return this._lifePoints; }
  get strength():number { return this._strength; }

  receiveDamage(attackPoints: number):number {
    const demage = this._lifePoints - attackPoints;

    if (attackPoints > 0) {
      if (demage <= 0) {
        this._lifePoints = -1;
      } else {
        this._lifePoints = demage;
      }
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}

export default Monster;