import { Component, OnInit, Injector } from '@angular/core';
import { createElement as h, Renderable } from 'ng-vdom';
import { GitUsers } from '../../services/gituser.service';

@Component({
  selector: 'app-order-list',
  template: '',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent extends Renderable implements OnInit {

  public items = []; 
  public listdata:any;
  
  constructor(
    private readonly _gitusers: GitUsers,
    protected __injector: Injector
  ) { 
      super(__injector);
  }
  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this._gitusers.getUsers().subscribe(
      response => {
        this.items = response;
      },
      error => {
       console.log(error);
      }
   );
  }

  render() {

    this.listdata = this.items.map( (list: any) => <li> {list.login} </li>);
    return (
      <ul>
        {this.listdata}
      </ul>
    );
  }
}
