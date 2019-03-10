import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { VDomModule } from 'ng-vdom';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    VDomModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
