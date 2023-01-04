import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  UserService } from 'src/app/shared/services/user.service';
import { Users } from 'src/app/shared/models/model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  fg : FormGroup = this.initForm()
  listeUser! : Users[]
  error! : string

  constructor(
    private userService : UserService,
    private builder : FormBuilder
  ) { }

  ngOnInit() : void {

    this.fg = this.initForm()   

    this.userService.getAllUser().subscribe({
      next : (data : Users[]) => {
        this.listeUser = data
        console.log(data);
      },
      error : (error) => {
        console.log(error.status + ' ' + error.statusText),
        this.error = error.statusText
      }
    })
  }

  initForm() : FormGroup{
    return this.builder.group({
      id : [null],
      name : [null, [Validators.min(5), Validators.required]],
      email : [null, Validators.required],
      password : [null, Validators.required],
      house: this.builder.array([]),
      family: this.builder.array([]),
      cart : this.builder.array([])
    })
  }

  submitForm(){
    this.userService.createUser(this.fg.value)
    console.log(this.fg.value);
  }

}
