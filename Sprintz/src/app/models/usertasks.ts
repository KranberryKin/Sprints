export interface IUserTasks{
    id: number;
    user_id:number;
    task_id:number;
}
export class UserTask implements IUserTasks{
    id: number;
    user_id: number;
    task_id: number;
    constructor(){
        this.id = -1;
        this.user_id = -1;
        this.task_id = -1;
    }
}