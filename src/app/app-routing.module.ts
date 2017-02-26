import {Routes, RouterModule} from "@angular/router";

import { HeroComponent } from './heroes/Components/hero/hero.component';
import { HeroDetailComponent } from './heroes/Components/my-hero-detail/hero-detail.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { AboutComponent } from './Pages/about/about.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NavigateTestComponent } from './Pages/navigate-test/navigate-test.component';
import {NgModule} from "@angular/core";
import { EnemyComponent } from './Enemies/Components/enemy-component/enemy.component';
import {HeroesPageComponent} from "./Pages/heroes-page/heroes-page.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }, {
        path: 'heroes',
        component: HeroesPageComponent,
        pathMatch: 'full'
    }, {
        path: 'enemies',
        component: EnemyComponent,
        pathMatch: 'full'
    }, {
        path: 'navigate',
        component: NavigateTestComponent,
        pathMatch: 'full'
    }, {
        path: 'heroes/:id',
        component: HeroDetailComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: '**',
        component: NotFoundPageComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
