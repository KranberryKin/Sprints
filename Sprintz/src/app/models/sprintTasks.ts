export interface ISprintTasks {
    id:number;
    sprint_id:number;
    task_id:number;
}
export class SprintTask implements ISprintTasks{
    id: number;
    sprint_id: number;
    task_id: number;
    constructor(){
        this.id = -1;
        this.sprint_id = -1;
        this.task_id = -1;
    }
}