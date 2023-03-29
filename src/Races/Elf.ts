import Race from './Race';

const POINTS_OF_LIFE = 99;

class Elf extends Race {
  private _maxLifePoints: number;
  private static ElfCount = 0;

  constructor(
    name: string,
    dexterity:number,
  ) {
    super(name, dexterity);

    Elf.ElfCount += 1;

    this._maxLifePoints = POINTS_OF_LIFE;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances():number {
    return this.ElfCount;
  }
}

// const a = new Dwarf('Arthur', 1);
// const b = new Dwarf('Arthur', 1);
// const c = new Dwarf('Arthur', 1);

// console.log(a.maxLifePoints);
// console.log(b.maxLifePoints);
// console.log(c.maxLifePoints);

export default Elf;
