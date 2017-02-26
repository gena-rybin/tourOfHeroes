import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnemyComponent } from './Components/enemy-component/enemy.component';
//import {AppRoutingModule} from "../app-routing.module";
import {AddEnemyComponent} from "./Components/add-enemy/add-enemy.component";
import { EnemyDetailComponent } from './Components/enemy-detail/enemy-detail.component';
import {EnemyService} from "./Services/enemy.service";
//import {PagesModule} from "../Pages/pages.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
      // AppRoutingModule,
      // PagesModule,
       SharedModule

  ],
  declarations: [
      AddEnemyComponent,
      EnemyComponent,
      EnemyDetailComponent

  ],
    exports: [
        AddEnemyComponent,
        EnemyComponent,
        EnemyDetailComponent

    ],
    providers: [ EnemyService ]
})
export class EnemiesModule { }
