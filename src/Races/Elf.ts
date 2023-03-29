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

export default Elf;
