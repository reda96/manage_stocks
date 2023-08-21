import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/core/services/market.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

   stocksObs = this.marketService.stocksObs$;
   constructor(private marketService:MarketService){}
  ngOnInit(): void {
    this.marketService.getCurrentPrices()
   
  }

}
