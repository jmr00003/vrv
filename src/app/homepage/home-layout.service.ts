import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ShowItemModel } from "../show-card/show-item.model";
import { AngularFireDatabase} from '@angular/fire/compat/database'

@Injectable(
    {providedIn: 'root'}
)
export class ShowCardService{
    constructor(private db: AngularFireDatabase){

    }

    getShows(){
        return this.db.list<ShowItemModel>("home-showcard").valueChanges();
    }

    getShow(index: number){
        
    }

    addShow(show: ShowItemModel){
        this.db.list<ShowItemModel>("products").push(show);
    }
}