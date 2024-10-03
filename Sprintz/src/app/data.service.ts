import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService<T extends {id:number}> {
  _data: T[] = [];
  private _dataName: string = "";
  constructor() {
    this._dataName = "app-sprintz-" + ( this._data[0]).toString().toLowerCase();
    this.getData();
   }

  createData(data:T){
    this._data.push(data);
    this.saveData();
  }
  getData(): boolean{
    const items = window.localStorage.getItem(this._dataName) ?? null;
    if(items !== null){
      this._data = JSON.parse(items);
      return true;
    }else{
      return false;
    }
  }
  removeData(objId:number){
    let confirmed = confirm("Are you sure you want to delete this?");
    if(confirmed){
      if(this._data.findIndex(obj => obj.id === objId) !== -1){
        var objList = this._data.filter(obj => obj.id !== objId);
        this._data = objList;
        this.saveData();
      }else{
        console.log("Error: ", "Failed to find Object");
      }
    }
    return;
  }
  saveData(){
    window.localStorage.setItem(this._dataName, JSON.stringify(this._data));
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  generateId(){
    var findingDupe = true;
    var returnedNonDupeID = 0;
    while(findingDupe){
      const id = this.getRandomNumber(0, 9999);
      if(this._data.findIndex(obj => obj.id === id) === -1){
        findingDupe = false;
        returnedNonDupeID = id;
      }
    }
    return returnedNonDupeID;
  }
}
