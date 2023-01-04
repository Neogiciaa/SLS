import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url : string = environment.url
  
  constructor(
    private client : HttpClient
  ) { }

  getAllUser() : Observable<Users[]> {
    return this.client.get<Users[]>(this.url + 'user')
  }

  createUser(newUser : Users){
  this.client.post(this.url + 'user', newUser).subscribe({
    next : () => {console.log("User created");    
    }
  })
  }

//   deleteUser(selectedUser : Users){
//   this.client.delete(this.url + 'users', selectedUser).subscribe({    // le .delete n'existe pas :(
//     next : () => {console.log("User deleted")
//   }
//  }
//  )
//  }
}
