import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthenticationService } from "../auth/authentication/authentication.service";
import { mock_show_list } from "../show-card/mock_show_list";
import { ShowItemModel } from "../show-card/show-item.model";
import { ShowCardService } from "./home-layout.service";

@Component({
    selector: 'vrv-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit{
    private user!: Subscription;
    public isAuthenticated:boolean = false;
    shows: ShowItemModel [] = [];
    constructor(private authentication:AuthenticationService, private showCardsService:ShowCardService){
      
    }
  ngOnInit(): void {

    this.user = this.authentication.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    });
    
    this.showCardsService.getShows().subscribe((data: ShowItemModel[]) => {
      console.log("Fetching home shows");
      for(var show of data){
        console.log(show);
        this.shows.push(show);
      }
    });

    
  }
}