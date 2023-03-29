import { EnergyType } from '../Energy';
import Archetype from './ Archetype';

class Mage extends Archetype {
  private _mana: EnergyType;
  private static mageCount = 0;

  constructor(name: string) {
    super(name);
    this._mana = 'mana';

    Mage.mageCount += 1;
  }

  get energyType(): EnergyType {
    return this._mana;
  }

  static createdArchetypeInstances(): number {
    return this.mageCount;
  }
}

export default Mage;