import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { UserInfo } from './user-info.model';

@Injectable()
@Component({
  selector: 'vrv-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  myInfo: UserInfo | undefined;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getUserInfo();
    this.showUserInfo();
  }

  getUserInfo(){
    return this.http.get<UserInfo>('https://vrv-ca29d-default-rtdb.firebaseio.com/my-info.json')
  }

  showUserInfo(){
    this.getUserInfo().subscribe((data: UserInfo) => {
      console.log(data);
      this.myInfo = data;
    })
  }

  

}
