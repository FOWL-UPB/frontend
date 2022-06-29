import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { userDto } from "../../dto-game-user/user.dto";


export class waitingDataSource extends DataSource<userDto>{

    data;

    constructor(list : userDto[]){
        super();
        this.data= new BehaviorSubject<userDto[]>(list);
    }

    connect(): Observable<userDto[]> {
        return this.data;
    }
    disconnect(): void {
    }

    
}