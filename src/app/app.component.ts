import { Component } from '@angular/core';
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

  constructor(){
    for(var show of mock_show_list){
      this.shows.push(show);
    }
  }
}
