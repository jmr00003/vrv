import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
import { AddShowcardComponent } from './add-showcard/add-showcard.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Black-Clover', component: BlackCloverLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'Accelerator', component: AcceleratorLayoutComponent},
  {path: 'Attack-On-Titan', component: AttackOnTitanLayoutComponent},
  {path: 'Demon-Slayer', component: DemonSlayerLayoutComponent},
  {path: 'Naruto-Shippuden', component: NarutoShippudenLayoutComponent},
  {path: 'My-Hero-Academia', component: MyHeroAcademiaLayoutComponent},
  {path: 'Crunchyroll', component: CrunchyrollLayoutComponent},
  {path: 'Mondo', component: MondoLayoutComponent},
  {path: 'VRV-Select', component: VRVSelectLayoutComponent},
  {path: 'browse', component: BrowseAllComponent},
  {path: 'admin', component: AddShowcardComponent},
  {path: 'auth', component: AuthenticationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
