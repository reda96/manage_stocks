import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order.model';
import { OrdersService } from 'src/app/core/services/orders.service';
import { Subscription, map, tap } from 'rxjs';
import { MarketService } from 'src/app/core/services/market.service';
import { Stock } from 'src/app/core/models/stock.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  ordersObs = this.ordersService.ordersObs$;
  stocks!: any;
  iterableStocks!: Stock[];
  stocksSub!: Subscription;
  selectedStock!: Stock;
  addNewDialogueFlag = false;
  currentOrder: Order = { personName: "", price: 0, quantity: 1, stockId: 0 };
  constructor(private ordersService: OrdersService, private marketService: MarketService) { }

  ngOnInit(): void {
    this.marketService.getCurrentPrices();
    this.marketService.stocksObs$.pipe(tap(s => {
      this.iterableStocks = s;
      this.stocks = s.reduce((accumulator, { name, id, price }) => {
        return { ...accumulator, [id]: { name: [name], price: [price] } };
      }, {})

    })).subscribe()
  }

  onAddNewOrder() {
    

    this.ordersService.addNewOrder(this.currentOrder);
    this.addNewDialogueFlag = false;
    this.currentOrder = { personName: "", price: 0, quantity: 1, stockId: 0 };


  }
  calculatePrice() {
    console.log(this.selectedStock);

    this.currentOrder.stockId = this.selectedStock.id;
    this.currentOrder.price = this.selectedStock.price * this.currentOrder.quantity;

  }
  drag(stock: Stock) {
    this.selectedStock = stock;

  }

  ngOnDestroy(): void {
    this.stocksSub?.unsubscribe();
  }

}
