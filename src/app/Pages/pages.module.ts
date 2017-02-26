import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnemyPageComponent } from './enemy-page/enemy-page.component';
import {AppRoutingModule} from "../app-routing.module";
import { HeroesPageComponent } from './heroes-page/heroes-page.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NavigateTestComponent} from "./navigate-test/navigate-test.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {HeroesModule} from "../heroes/heroes.module";
import {EnemiesModule} from "../Enemies/enemies.module";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule, AppRoutingModule, EnemiesModule, HeroesModule, SharedModule, FormsModule
    ],
    declarations: [
        DashboardComponent,
        HeroesPageComponent,
        EnemyPageComponent,
        NavigateTestComponent,
        AboutComponent,
        NotFoundPageComponent
    ],
    exports: [
        DashboardComponent,
        HeroesPageComponent,
        EnemyPageComponent,
        NavigateTestComponent,
        AboutComponent,
        NotFoundPageComponent
    ]
})
export class PagesModule { }
