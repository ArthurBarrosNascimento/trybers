import Race from './Race';

const POINTS_OF_LIFE = 80;

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static dwarfCount = 0;

  constructor(
    name: string,
    dexterity:number,
  ) {
    super(name, dexterity);

    Dwarf.dwarfCount += 1;

    this._maxLifePoints = POINTS_OF_LIFE;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances():number {
    return this.dwarfCount;
  }
}

// const a = new Dwarf('Arthur', 1);
// const b = new Dwarf('Arthur', 1);
// const c = new Dwarf('Arthur', 1);

// console.log(a.maxLifePoints);
// console.log(b.maxLifePoints);
// console.log(c.maxLifePoints);

export default Dwarf;
