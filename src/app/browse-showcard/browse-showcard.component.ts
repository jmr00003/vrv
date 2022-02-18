import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vrv-browse-showcard',
  templateUrl: './browse-showcard.component.html',
  styleUrls: ['./browse-showcard.component.css']
})
export class BrowseShowcardComponent implements OnInit {
  @Input() thumbnail: string;
  @Input() poster: string;
  @Input() title: string;
  @Input() type: string;
  @Input() language: string;
  @Input() logo: string;
  @Input() route: string;

  constructor(){
    this.thumbnail = "/assets/show-card/Blank-Thumbnail.png";
    this.poster = "/assets/show-card/Blank-Poster.png";
    this.title = "No Title Provided";
    this.type = "XXXXX";
    this.language = "No Language";
    this.logo = "/assets/Crunchyroll-Banner.png";
    this.route = "";
}

  ngOnInit(): void {
  }

}
