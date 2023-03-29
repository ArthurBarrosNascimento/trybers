import Race from './Race';

const POINTS_OF_LIFE = 60;

class Halfling extends Race {
  private _maxLifePoints: number;
  private static HalflingCount = 0;

  constructor(
    name: string,
    dexterity:number,
  ) {
    super(name, dexterity);

    Halfling.HalflingCount += 1;

    this._maxLifePoints = POINTS_OF_LIFE;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances():number {
    return this.HalflingCount;
  }
}

export default Halfling;
