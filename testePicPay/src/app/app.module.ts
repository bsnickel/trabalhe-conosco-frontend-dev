import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app.bootstrap-module';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    HttpModule,
    FormsModule,
    CommonModule   
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
