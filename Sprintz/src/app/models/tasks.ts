export interface ITask {
    id:number;
    task_name:string;
    task_description:string;
    story_points:number;
    assigned_user?:number;
}
 export class Task implements ITask{
    id:number;
    task_name: string;
    task_description: string;
    story_points: number;
    assigned_user?: number | undefined;
    constructor(){
        this.id = -1;
        this.task_name= "";
        this.task_description="";
        this.story_points = 0;
        this.assigned_user = undefined;
    }
}