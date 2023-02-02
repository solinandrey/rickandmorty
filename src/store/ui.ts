import { makeAutoObservable} from 'mobx';
import { SitePage } from '@types';

class UIState {
  currentPage: SitePage | '' = ''
  constructor() {
    makeAutoObservable(this);
  }

  setPage = (page: SitePage) => {
    this.currentPage = page;
  }

}

export default new UIState()