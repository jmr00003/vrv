import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { AuthResponse } from './authResponse';

@Component({
  selector: 'vrv-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  public buttonClicked!:string;
  private authObservable!:Observable<AuthResponse>;

  constructor(private auth:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm){
    console.log("Button clicked = " + this.buttonClicked);
    console.log(data.value);

    if(this.buttonClicked == 'SignUp'){
      this.authObservable = this.auth.signup(data.value.email, data.value.password);
    }
    if(this.buttonClicked == 'Login'){
      this.authObservable = this.auth.login(data.value.email, data.value.password);
    }
    
    this.authObservable.subscribe(
      
      (data:AuthResponse) => {
        console.log(data);
        this.router.navigate(['']);
      },
      error => {
        console.log(error);
      }
    )

    data.resetForm();
  }

  onCLick(buttonType:string){

  }

}
