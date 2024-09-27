import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageHandlerService {
  Pages: string[] = [
    "Home",
    "Sprintz",
    "Profile",
  ];
  currentPage: string = "Home";
  constructor() { }
  getCurrentPage(): string{
    return this.currentPage;
  }
  setCurrentPage(s:string):void{
    if(this.Pages.findIndex(p => p = s) !== -1){
      this.currentPage = s;
    }
  }
}
