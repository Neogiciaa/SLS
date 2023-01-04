import { Component, OnInit } from '@angular/core';
// import { User } from 'src/app/shared/models/model';
// import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  // currentUserList! : User[]

  constructor(
   // private _userService : UserService
  ) { }

  ngOnInit() {
 // this.loadDatas()    
  }

  // loadDatas() {
  //     this._userService.listeUserObservable.subscribe({
  //       next : (data : User[]) => {
  //         this.currentUserList = data
  //       }
  //     })
  //   }
}
