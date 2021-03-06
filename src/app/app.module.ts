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
import { CrunchyrollLayoutComponent } from './crunchyroll-page/crunchyroll.component';
import { MondoLayoutComponent } from './mondo-page/mondo.component';
import { VRVSelectLayoutComponent } from './vrv-select-page/vrv-select.component';
import { BrowseAllComponent } from './browse-all/browse-all-layout.component';
import { BrowseShowcardComponent } from './browse-showcard/browse-showcard.component';
import { BrowseNavbarComponent } from './browse-navbar/browse-navbar.component';
import { BrowseLargeCardComponent } from './browse-large-card/browse-large-card.component';
import { VrvPremiumCardComponent } from './vrv-premium-card/vrv-premium-card.component';
import { VrvHomeTopCardComponent } from './vrv-home-top-card/vrv-home-top-card.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddShowcardComponent } from './add-showcard/add-showcard.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

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
    MyHeroAcademiaLayoutComponent,
    CrunchyrollLayoutComponent,
    MondoLayoutComponent,
    VRVSelectLayoutComponent,
    BrowseAllComponent,
    BrowseShowcardComponent,
    BrowseNavbarComponent,
    BrowseLargeCardComponent,
    VrvPremiumCardComponent,
    VrvHomeTopCardComponent,
    CreateAccountComponent,
    UserInfoComponent,
    AddShowcardComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
