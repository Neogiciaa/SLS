import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})

export class InscriptionComponent implements OnInit {

  fg : FormGroup = this.initForm()

  constructor(
    private userService : UserService,
    private builder : FormBuilder
  ) { }

  ngOnInit() {}

  initForm() : FormGroup {
    return this.builder.group({
      id : [null],
      name : [null, [Validators.min(5), Validators.required]],
      email : [null, Validators.required],
      password : [null],
      // family: this.builder.array([]),
      // cart : this.builder.array([])
    })
  }
  
  submitForm(){
    this.userService.createUser(this.fg.value) 
  }
}
 