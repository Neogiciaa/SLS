import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isConnectionSelected : boolean = false

  constructor() {}

  displayConnection(){
    this.isConnectionSelected = !this.isConnectionSelected
  }

  displayInscription(){
    this.isConnectionSelected = !this.isConnectionSelected
  }

}
