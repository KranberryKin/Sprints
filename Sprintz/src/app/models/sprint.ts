export interface ISprint {
    id:number;
    sprint_name:string;
    start_date:string;
    end_date:string;
}

export class Sprint implements ISprint{
    id: number;
    sprint_name: string;
    start_date: string;
    end_date: string;
    constructor(){
        this.id = -1,
        this.sprint_name = "",
        this.start_date = "",
        this.end_date = ""
    }
}