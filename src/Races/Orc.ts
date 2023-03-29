import Race from './Race';

const POINTS_OF_LIFE = 74;

class Orc extends Race {
  private _maxLifePoints: number;
  private static OrcCount = 0;

  constructor(
    name: string,
    dexterity:number,
  ) {
    super(name, dexterity);

    Orc.OrcCount += 1;

    this._maxLifePoints = POINTS_OF_LIFE;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances():number {
    return this.OrcCount;
  }
}

export default Orc;
