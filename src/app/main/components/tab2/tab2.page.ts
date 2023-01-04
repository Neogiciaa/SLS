import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/shared/models/model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  currentUserList! : Users[] 

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
   // this.currentUserList = this.userService.listeUser
  }

}
