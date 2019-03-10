import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategyService } from './services/preload/selective-preloading-strategy.service';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule',
    data: { preload : true }
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule',
    data: { preload : true }
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
