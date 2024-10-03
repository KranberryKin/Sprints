import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ITask } from '../models/tasks';
import { ISprint } from '../models/sprint';
import { ISprintTasks } from '../models/sprintTasks';

@Component({
  selector: 'app-sprintz',
  standalone: true,
  imports: [],
  templateUrl: './sprintz.component.html',
  styleUrl: './sprintz.component.scss'
})
export class SprintzComponent {
  sprintz: ISprint[] = []

  constructor(
    private sprintzService: DataService<ISprint>,
    private taskService:  DataService<ITask>,
    private sprintTasksService:  DataService<ISprintTasks>,
  ){
    this.sprintz = this.sprintzService._data;
  }

}
