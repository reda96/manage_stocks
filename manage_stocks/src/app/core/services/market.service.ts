import { BehaviorSubject } from "rxjs";
import { Defines } from "../constants/defines";
import { Injectable } from "@angular/core";
import { Stock } from "../models/stock.model"

@Injectable({
    providedIn: 'root',
})
export class MarketService {

    private stocksSub = new BehaviorSubject<Stock[]>([]);
    constructor() {


    }

    get stocksObs$() {
        return this.stocksSub.asObservable();
    }

    public getCurrentPrices() {
        let stocks = Defines.Stocks.map(s => { return { ...s, price: (100 * Math.random()) + 1 } });
        this.stocksSub?.next(stocks);
        setInterval(() => {
            let stocks = Defines.Stocks.map(s => { return { ...s, price: (100 * Math.random()) + 1 } });
            this.stocksSub?.next(stocks);
        }, 10000);



    }
    public reorderStocks(stocks:Stock[],draggedStock:Stock, droppedStockId:string){
        
        
        let newIndex =stocks.findIndex(s=>s.id==+droppedStockId)
        let newStocks = stocks.filter(s=>s.id!==draggedStock.id);
        newStocks = [...newStocks.slice(0,newIndex),draggedStock,...newStocks.slice(newIndex)];
        Defines.Stocks = newStocks.map(({ price,...rest})=> rest)
        this.stocksSub?.next(newStocks);
        
        
        
    }
}