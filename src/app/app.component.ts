import { Component } from '@angular/core';
import { FirstEpisodeModel } from './first-episode-card/first-episode-item.model';
import { mock_first_list } from './first-episode-card/mock_first_list';
import { mock_show_list } from './show-card/mock_show_list';
import { ShowItemModel } from './show-card/show-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vrv';
  shows: ShowItemModel [] = [];
  firsteps: FirstEpisodeModel [] = [];

  constructor(){
    for(var show of mock_show_list){
      this.shows.push(show);
    }

    for(var ep of mock_first_list){
      this.firsteps.push(ep);
    }
  }
}
