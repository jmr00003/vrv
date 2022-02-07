import { Component, Input } from "@angular/core";

@Component({
    selector: 'vrv-show-card',
    templateUrl: 'show-card.component.html',
    styleUrls: ['show-card.component.css']
})
export class ShowCardComponent{
    @Input() thumbnail: string;
    @Input() poster: string;
    @Input() title: string;
    @Input() type: string;
    @Input() language: string;
    @Input() logo: string;

    constructor(){
        this.thumbnail = "/assets/show-card/Blank-Thumbnail.png";
        this.poster = "/assets/show-card/Blank-Poster.png";
        this.title = "No Title Provided";
        this.type = "XXXXX";
        this.language = "No Language";
        this.logo = "/assets/Crunchyroll-Banner.png";
    }
}