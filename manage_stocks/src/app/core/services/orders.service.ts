import { BehaviorSubject } from "rxjs";
import { Defines } from "../constants/defines";
import { Injectable } from "@angular/core";
import { Order } from "../models/order.model";

@Injectable({
    providedIn: 'root',
  })
export class OrdersService   {

    private ordersSub = new BehaviorSubject<Order[]>([{stockId:1,personName:"ahmed",price:20,quantity:4 },
    {stockId:6,personName:"mark",price:50,quantity:4 },
    { stockId:10,personName:"emad",price:50,quantity:4 }]);
    constructor(){
        
        
    }

    get ordersObs$() {
      return this.ordersSub.asObservable();
    }
  
   public addNewOrder(order:Order){

    let orders = [...this.ordersSub.value, order]
    this.ordersSub?.next(orders);
      
      
    }
}