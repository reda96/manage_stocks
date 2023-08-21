import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComponent } from './features/market/market.component';
import { OrderComponent } from './features/order/order.component';

const routes: Routes = [
  { path: 'market', component: MarketComponent },
  { path: 'orders', component: OrderComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
