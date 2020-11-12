import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user = new User();
   msg ='';
  
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {}

  // loginUser =(user)=>{
  //   console.log(JSON.stringify(user));
  //  this.userService.login(user).subscribe(res=>{
  //    alert('username and password successfully send');
  //    this.router.navigate(['listuser']);
  //  });

  loginUser =()=>{
    this.userService.login(this.user).subscribe(
      data => {
        console.log("response received");
        this.router.navigate(['/listuser']);
    },
      error => {
        console.log("exception occured");
        this.msg='Bad credentials try again please';
    }
      
    )
  }
    
  }

