import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/header/topnavbar.component';

import { AppComponent } from './app.component';
import { FirstEpisodeCardComponent } from './first-episode-card/first-episode-card.component';
import { FooterComponent } from './footer/footer.component';
import { ShowCardComponent } from './show-card/show-card.component';
import { AppRoutingModule } from './app-routing.module';
import { BlackCloverLayoutComponent } from './shows/black-clover/black-clover-layout.component';
import { HomeLayoutComponent } from './homepage/home-layout.component';
import { AcceleratorLayoutComponent } from './shows/accelerator/accelerator-layout.component';
import { AttackOnTitanLayoutComponent } from './shows/attack-on-titan/attack-on-titan-layout.component';
import { DemonSlayerLayoutComponent } from './shows/demon-slayer/demon-slayer-layout.component';
import { NarutoShippudenLayoutComponent } from './shows/naruto-shippuden/naruto-shippuden-layout.component';
import { MyHeroAcademiaLayoutComponent } from './shows/my-hero-academia/my-hero-academia-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    ShowCardComponent,
    FirstEpisodeCardComponent,
    BlackCloverLayoutComponent,
    HomeLayoutComponent,
    AcceleratorLayoutComponent,
    AttackOnTitanLayoutComponent,
    DemonSlayerLayoutComponent,
    NarutoShippudenLayoutComponent,
    MyHeroAcademiaLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
