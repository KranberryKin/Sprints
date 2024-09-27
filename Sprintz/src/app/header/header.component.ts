import { Component } from '@angular/core';
import { PageHandlerService } from '../page-handler.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  Title = "Sprintz"

  constructor(private pageHandlerService:PageHandlerService){
    
  }

  navigate(s:string){
    this.pageHandlerService.setState(s)
  }

}
