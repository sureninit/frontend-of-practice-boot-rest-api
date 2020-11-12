import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userForm: FormGroup
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(),
      password: new FormControl(),
      mobile: new FormControl(),
      dob: new FormControl()
    });
  }

  userSave=(user)=>{
    console.log(JSON.stringify(user));
    this.userService.saveUser(user).subscribe(res=>{
      alert('user info is saved successfully');
    })
    
    
  }

}
