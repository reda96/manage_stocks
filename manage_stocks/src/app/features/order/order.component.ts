import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order.model';
import { OrdersService } from 'src/app/core/services/orders.service';
import { Subscription, map, tap } from 'rxjs';
import { MarketService } from 'src/app/core/services/market.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  ordersObs = this.ordersService.ordersObs$;
  stocks!: any;
  stocksSub!: Subscription;
 
  constructor(private ordersService: OrdersService, private marketService: MarketService) { }

  ngOnInit(): void {
    
    this.stocksSub= this.marketService.stocksObs$.pipe(tap(s => {
      this.stocks = s.reduce((accumulator, { name, id, price }) => {
        return { ...accumulator, [id]: { name: [name], price: [price] } };
      }, {})

    })).subscribe()
  }




  ngOnDestroy(): void {
    this.stocksSub?.unsubscribe();
  }

}
