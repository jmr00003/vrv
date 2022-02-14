import { Component, Input } from "@angular/core";

@Component({
    selector: 'vrv-first-ep',
    templateUrl: 'first-episode-card.component.html',
    styleUrls: ['first-episode-card.component.css']
})
export class FirstEpisodeCardComponent {
    @Input() thumbnail: string;
    @Input() title: string;
    @Input() episode: string;
    @Input() description: string;
    @Input() type: string;
    @Input() language: string;
    @Input() comments: string;
    @Input() time: string;

    constructor(){
        this.thumbnail = "/assets/first-episode/First-Ep-Blank.png";
        this.title = "No Title";
        this.episode = "No Episode";
        this.description = "No Description";
        this.type = "No Type";
        this.language = "None";
        this.comments = "XXXX";
        this.time = "0";
    }
}