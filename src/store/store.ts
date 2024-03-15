import { makeAutoObservable } from 'mobx';
import { ITab } from '../types';
import tabsData from '../data.json';

class Store {
  tabList: ITab[] = tabsData;
  currentId: number = this.tabList[0].id;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentId = (id: number) => {
    this.currentId = id;
  };
}

export default new Store();
