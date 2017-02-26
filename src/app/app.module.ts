import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from "@angular/common";

import { AppComponent } from './app/app.component';

import { AppRoutingModule } from './app-routing.module';
import {HeroesModule} from "./heroes/heroes.module";
import { EnemiesModule } from './Enemies/enemies.module';
import {PagesModule} from "./Pages/pages.module";
import {SharedModule} from "./shared/shared.module";
import {AlertModule} from "ng2-bootstrap";

import {MaterialModule} from "@angular/material";
import 'hammerjs';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

@NgModule({
  declarations: [
      AppComponent

  ],
  imports: [
      FormsModule,
      HttpModule,
      CommonModule,
      BrowserModule,
      AlertModule.forRoot(),
      MaterialModule,
      Angular2FontAwesomeModule,

      PagesModule,
      EnemiesModule,
      HeroesModule,
      SharedModule,
      AppRoutingModule//,

  ],
    exports: [
    ],
  providers: [ ],
  bootstrap: [AppComponent]
})

export class AppModule { }

