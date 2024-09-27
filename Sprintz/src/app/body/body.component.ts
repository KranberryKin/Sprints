import { Component } from '@angular/core';
import { PageHandlerService } from '../page-handler.service';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { SprintzComponent } from '../sprintz/sprintz.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [HomeComponent, ProfileComponent, SprintzComponent],
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
      this.updateDivClass(this.currentPage);
      this.currentPage = state;
      this.updateDivClass(this.currentPage);
    });
  }

  updateDivClass(s:string){
    let doc = document.getElementById(s);
    if(doc?.classList.contains("hidden")){
      doc.classList.remove("hidden")
    }else {
      doc?.classList.add("hidden")
    }
  }
}
