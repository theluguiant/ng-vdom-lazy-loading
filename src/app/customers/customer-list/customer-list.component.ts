import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GitUsers } from '../../services/gituser.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent implements OnInit {
  public items: any; 
  constructor(
    private readonly _gitusers: GitUsers,
    private cdr: ChangeDetectorRef
  ) { 

  }

  ngAfterViewInit() {
    this.cdr.detach(); //desactiva la detección de cambios
  }

  getUsers(){
    this._gitusers.getUsers().subscribe(
      response => {
        this.items = response;
        this.cdr.detectChanges(); // los cambios se van a efectuar cuando se llame este metodo
      },
      error => {
       console.log(error);
      }
   );
  }

  ngOnInit() {
    this.getUsers();
  }

}
