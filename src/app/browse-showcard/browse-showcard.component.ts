import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vrv-browse-showcard',
  templateUrl: './browse-showcard.component.html',
  styleUrls: ['./browse-showcard.component.css']
})
export class BrowseShowcardComponent implements OnInit {
  @Input() thumbnail: string;
  @Input() title: string;
  @Input() type: string;
  @Input() language: string;
  @Input() logo: string;
  @Input() route: string;

  constructor(){
    this.thumbnail = "/assets/browse-card/Blank-Browse-Thumbnail.png";
    this.title = "No Title";
    this.type = "XXXXX";
    this.language = "None";
    this.logo = "/assets/Crunchyroll-Banner.png";
    this.route = "";
}

  ngOnInit(): void {
  }

}
