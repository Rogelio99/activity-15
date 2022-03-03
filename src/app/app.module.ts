import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationFruitsComponent } from './fruits/pagination-fruits/pagination-fruits.component';
import { DetailFruitsComponent } from './fruits/detail-fruits/detail-fruits.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationFruitsComponent,
    DetailFruitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
