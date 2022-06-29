import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { tableDto } from "../dto-create-join/table.dto";

export class tableDataSource extends DataSource<tableDto>{

    data;

    constructor(list : tableDto[]){
        super();
        this.data= new BehaviorSubject<tableDto[]>(list);
    }

    connect(): Observable<tableDto[]> {
        return this.data;
    }
    disconnect(): void {
    }

    
}