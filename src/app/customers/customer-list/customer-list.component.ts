import { Component, OnInit } from '@angular/core';
import { GitUsers } from '../../services/gituser.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public items: any; 
  constructor(
    private readonly _gitusers: GitUsers
  ) { 

  }

  getUsers(){
    this._gitusers.getUsers().subscribe(
      response => {
        this.items = response;
      },
      error => {
       console.log(<any>error);
      }
   );
  }

  ngOnInit() {
    this.getUsers();
  }

}
