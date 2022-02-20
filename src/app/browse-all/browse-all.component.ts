import { Component, OnInit } from '@angular/core';
import { BrowseItemModel } from '../browse-showcard/browse-item.model';
import { mock_browse_list } from '../browse-showcard/mock-browse-list';

@Component({
  selector: 'vrv-browse-all',
  templateUrl: './browse-all.component.html',
  styleUrls: ['./browse-all.component.css']
})
export class BrowseAllComponent implements OnInit {
  shows: BrowseItemModel [] = [];

  constructor() {
    for(var show of mock_browse_list){
      this.shows.push(show);
    }
   }

  ngOnInit(): void {
  }

}
