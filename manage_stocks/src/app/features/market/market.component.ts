import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order.model';
import { Stock } from 'src/app/core/models/stock.model';
import { MarketService } from 'src/app/core/services/market.service';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  addNewDialogueFlag = false;
  stocksObs = this.marketService.stocksObs$;
  currentOrder: Order = { personName: "", price: 0, quantity: 1, stockId: 0 };
  selectedStock!: Stock;
  draggedStock!:Stock;
  constructor(private marketService: MarketService, private ordersService: OrdersService) { }
  ngOnInit(): void {
    this.marketService.getCurrentPrices();
    

  }
  onAddNewOrder() {


    this.ordersService.addNewOrder(this.currentOrder);
    this.addNewDialogueFlag = false;
    this.currentOrder = { personName: "", price: 0, quantity: 1, stockId: 0 };


  }
  drag(event:any,stock: Stock) {
    this.draggedStock = stock;
    
  }
  drop(event: any, stocks:Stock[]) {
    console.log(event,event.target.parentElement.id, event.target.id);
    let droppedStockId = event.target.parentElement.id? event.target.parentElement.id:event.target.id;
    console.log(droppedStockId.split("_"));
    
    this.marketService.reorderStocks(stocks, this.draggedStock,droppedStockId.split("_")[0] )
  }
  selectStock(stock:Stock){
    this.selectedStock = stock;
    this.addNewDialogueFlag = true;
  }
  calculatePrice() {
    

    this.currentOrder.stockId = this.selectedStock.id;
    this.currentOrder.price = this.selectedStock.price * this.currentOrder.quantity;

  }

}
