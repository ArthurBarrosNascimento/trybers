import { EnergyType } from '../Energy';
import Archetype from './ Archetype';

class Necromancer extends Archetype {
  private _mana: EnergyType;
  private static necromancerCount = 0;

  constructor(name: string) {
    super(name);
    this._mana = 'mana';

    Necromancer.necromancerCount += 1;
  }

  get energyType(): EnergyType {
    return this._mana;
  }

  static createdArchetypeInstances(): number {
    return this.necromancerCount;
  }
}

export default Necromancer;