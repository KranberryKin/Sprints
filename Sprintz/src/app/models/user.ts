export interface IUser{
    id:number;
    user_name:string; 
    user_password:string;
}
export class User implements IUser{
    id:number;
    user_name: string;
    user_password: string;
    constructor(){
        this.id = -1;
        this.user_name = "";
        this.user_password ="";
    }
}