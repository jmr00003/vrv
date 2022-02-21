import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vrv-browse-large-card',
  templateUrl: './browse-large-card.component.html',
  styleUrls: ['./browse-large-card.component.css']
})
export class BrowseLargeCardComponent implements OnInit {
  @Input() thumbnail: string;
  @Input() poster: string;
  @Input() title: string;
  @Input() type: string;
  @Input() language: string;
  @Input() description: string;
  @Input() route: string;

  constructor(){
      this.thumbnail = "/assets/show-card/Blank-Thumbnail.png";
      this.poster = "/assets/show-card/Blank-Poster.png";
      this.title = "No Title Provided";
      this.type = "XXXXX";
      this.language = "No Language";
      this.description = "No Description";
      this.route = "";
  }

  ngOnInit(): void {
  }

}
