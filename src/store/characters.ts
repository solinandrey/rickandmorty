import { makeAutoObservable} from 'mobx';
import { getAllCharacters, getCharacter } from '@api'
import { CharacterFull, CharacterLite } from '@types';

class Characters {
  charactersList: CharacterLite[] = [];
  detailedCharacter: CharacterFull | null = null
  constructor() {
    makeAutoObservable(this);
  }

  getCharacters = async () => {
    this.charactersList = await getAllCharacters();
  }

  getDetailedCharacter = async (id: number) => {
    this.detailedCharacter = await getCharacter(id);
  }

}

export default new Characters()