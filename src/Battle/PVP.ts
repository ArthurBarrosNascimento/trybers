import Character from '../Character';
import Battle from './Battle';

class PVP extends Battle {
  protected playerDois: Character;

  constructor(protected pUm: Character, pDois: Character) {
    super(pUm);
    this.playerDois = pDois;
  }
  
  fight(): number {
    while (this.player.lifePoints === -1 || this.playerDois.lifePoints === -1) {
      this.player.attack(this.playerDois);
      this.playerDois.attack(this.player);  
    }
    return super.fight();
  }
}

export default PVP;