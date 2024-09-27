import { Component, SimpleChanges } from '@angular/core';
import { PageHandlerService } from '../page-handler.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  currentPage:string = "";

  
  constructor(private pageHandlerService: PageHandlerService){
    this.currentPage = pageHandlerService.getCurrentPage();
  }

  ngOnInit(): void {
    this.pageHandlerService.state$.subscribe((state) => {
      this.currentPage = state;
    });
  }
}
