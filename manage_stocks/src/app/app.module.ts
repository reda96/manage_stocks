import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MarketComponent } from './features/market/market.component';
import { OrderComponent } from './features/order/order.component';
import { LayoutComponent } from './core/layout/layout.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from 'primeng/dragdrop';
@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    OrderComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
