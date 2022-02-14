import { Component } from "@angular/core";
import { mock_show_list } from "../show-card/mock_show_list";
import { ShowItemModel } from "../show-card/show-item.model";

@Component({
    selector: 'vrv-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent{
    shows: ShowItemModel [] = [];
    constructor(){
      for(var show of mock_show_list){
        this.shows.push(show);
      }
    }
}