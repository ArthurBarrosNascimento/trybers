import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints : number;
  private _strength : number;
  private _defense : number;
  private _dexterity : number;
  private _energy : Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10) };
  }

  get race():Race { return this._race; }
  get archetype():Archetype { return this._archetype; }
  get lifePoints():number { return this._lifePoints; }
  get strength():number { return this._strength; }
  get defense():number { return this._defense; }
  get dexterity():number { return this._dexterity; }

  get energy():Energy { return { ...this._energy }; }

  receiveDamage(attackPoints: number):number {
    const demage = attackPoints - this._defense;

    if (demage > 0) {
      const lifeLost = this._lifePoints - demage;
      this._lifePoints = lifeLost;
    } else {
      const lifeLost = this._lifePoints - 1;
      this._lifePoints = lifeLost;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this.upMaxLiFe();
    this.upStrength();
    this.upDexterity();
    this.upDefense();
    this.upEnergy();
  }

  private upMaxLiFe():void {
    const upMaxLife = this._maxLifePoints + getRandomInt(1, 10);
    if (upMaxLife > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = upMaxLife;
    }
    
    const newLife = this._lifePoints + 1;
    this._lifePoints = newLife;

    if (this.lifePoints > this._race.maxLifePoints) {
      this._lifePoints = this._race.maxLifePoints;
    }
  }

  private upStrength():void {
    const upStr = this._strength + getRandomInt(1, 10);
    this._strength = upStr;
  }

  private upDexterity():void {
    const upDex = this._dexterity + getRandomInt(1, 10);
    this._dexterity = upDex;
  }

  private upDefense():void {
    const upDef = this._defense + getRandomInt(1, 10);
    this._defense = upDef;
  }

  private upEnergy(): void {
    this._energy.amount = 10;
  }
}

export default Character;
