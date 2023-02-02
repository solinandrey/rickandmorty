import { makeAutoObservable, runInAction } from "mobx";
import { getAllCharacters, getCharacter } from "@api";
import {
  CharacterFull,
  PaginationInfo,
  CharacterLite,
} from "@types";

class Characters {
  charactersList: CharacterLite[] = [];
  paginationInfo: PaginationInfo | null = null;
  detailedCharacter: CharacterFull | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getCharacters = async (page: number, searchBody?: string) => {
    const data = await getAllCharacters(page, searchBody);
    this.setCharactersList(data.results, data.info);
  };

  getDetailedCharacter = async (id: number) => {
    const data = await getCharacter(id);
    this.setDetailedCharacter(data);
  };

  setDetailedCharacter = (character: CharacterFull | null) => {
    runInAction(() => {
      this.detailedCharacter = character;
    });
  };

  setCharactersList = (
    list: CharacterLite[],
    paginationInfo: PaginationInfo
  ) => {
    runInAction(() => {
      this.charactersList = list;
      this.paginationInfo = paginationInfo;
    });
  };
}

export default new Characters();
