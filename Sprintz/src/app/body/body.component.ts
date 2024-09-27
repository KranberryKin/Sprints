import { Component } from '@angular/core';
import { PageHandlerService } from '../page-handler.service';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [PageHandlerService],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  constructor(pageHandlerService: PageHandlerService){

  }
  
}
