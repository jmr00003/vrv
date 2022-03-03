import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ShowItemModel } from "../show-card/show-item.model";

@Injectable(
    {providedIn: 'root'}
)
export class ShowCardService{
    private baseUrl:string="https://vrv-ca29d-default-rtdb.firebaseio.com/";
    private showCardEndpoint:string="home-showcard.json";

    constructor(private http:HttpClient){

    }

    getShows(){
        return this.http.get<ShowItemModel []>(this.baseUrl + this.showCardEndpoint);
    }

    getShow(index: number){
        return this.http.get<ShowItemModel []>(this.baseUrl + 'home-showcard' + '/' + index + '.json');
    }
}