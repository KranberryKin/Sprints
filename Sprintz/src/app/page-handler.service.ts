import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageHandlerService {
  pages: string[] = [
    "Home",
    "Sprintz",
    "Profile",
  ];
  currentPage: string = "Home";
  private stateSubject = new BehaviorSubject<string>(this.currentPage);
  public state$ = this.stateSubject.asObservable();
  
  constructor() {

   }

  getCurrentPage(): string{
      return this.currentPage;
  }
  
  setState(newState: string) {
    this.stateSubject.next(newState);
  }
}
