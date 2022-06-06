import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/common/header/header.component';
import { PageLayoutComponent } from './shared/common/layouts/page-layout/page-layout.component';
import { FooterComponent } from './shared/common/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeroComponent } from './home-page/hero/hero.component';
import { TopicsComponent } from './home-page/topics/topics.component';
import { NotFoundComponent } from './shared/common/not-found/not-found.component';
import { DividerComponent } from './shared/common/divider/divider.component';
import {PersistenceService} from "./shared/services/persistence.service";
import {ContentContainerComponent} from "./shared/common/layouts/content-container/content-container.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageLayoutComponent,
    FooterComponent,
    HomePageComponent,
    HeroComponent,
    TopicsComponent,
    NotFoundComponent,
    DividerComponent,
    ContentContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
