import { Component, OnInit } from '@angular/core';
import { ShowCardService } from '../homepage/home-layout.service';
import { ShowItemModel } from '../show-card/show-item.model';

@Component({
  selector: 'vrv-add-showcard',
  templateUrl: './add-showcard.component.html',
  styleUrls: ['./add-showcard.component.css']
})
export class AddShowcardComponent implements OnInit {

  constructor(public scs: ShowCardService) { }

  ngOnInit(): void {
  }

  addShow(show: ShowItemModel){
    console.log("You clicked add card");
    console.log(show);
    this.scs.addShow(show);
  }

}
