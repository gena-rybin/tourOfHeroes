import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import {AppRoutingModule} from "../app-routing.module";
import {HeroService} from "./Services/hero.service";

import {HeroDetailComponent} from "./Components/my-hero-detail/hero-detail.component";
import {AddHeroComponent} from "./Components/add-hero/add-hero.component";
import {HeroComponent} from "./Components/hero/hero.component";
//import {PagesModule} from "../Pages/pages.module";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
      CommonModule, FormsModule,
      // AppRoutingModule,
      // PagesModule,
      SharedModule
  ],
  declarations: [
      AddHeroComponent,
      HeroComponent,
      HeroDetailComponent

  ],
    exports: [
        AddHeroComponent,
        HeroComponent,
        HeroDetailComponent


    ],
    providers: [ HeroService ]

})
export class HeroesModule { }
