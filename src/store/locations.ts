import { makeAutoObservable, runInAction } from "mobx";
import { getLocationResidents, getLocations } from "@api";
import { CharacterLite, LocationInfo, PaginationInfo } from "@types";
class Locations {
  locationsList: LocationInfo[] = [];
  residentsList: CharacterLite[] | [] = [];
  paginationInfo: PaginationInfo | null = null;
  activeLocation: string | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  getLocations = async (page: number, searchBody?: string) => {
    const data = await getLocations(page, searchBody);
    this.setLocations(data.results, data.info);
  };

  getResidents = async (id: number) => {
    const data = await getLocationResidents(id);
    this.setResidents(data.residents);
    this.setActiveLocation(data.name);
  };

  setLocations = (list: LocationInfo[], paginationInfo: PaginationInfo) => {
    runInAction(() => {
      this.locationsList = list;
      this.paginationInfo = paginationInfo;
    });
  };

  setResidents = (list: CharacterLite[] | []) => {
    runInAction(() => {
      this.residentsList = list;
    });
  };

  setActiveLocation = (name: string) => {
    runInAction(() => {
      this.activeLocation = name;
    })
  }
}

export default new Locations();
