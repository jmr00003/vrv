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

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Black-Clover', component: BlackCloverLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'Accelerator', component: AcceleratorLayoutComponent},
  {path: 'Attack-On-Titan', component: AttackOnTitanLayoutComponent},
  {path: 'Demon-Slayer', component: DemonSlayerLayoutComponent},
  {path: 'Naruto-Shippuden', component: NarutoShippudenLayoutComponent},
  {path: 'My-Hero-Academia', component: MyHeroAcademiaLayoutComponent}
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
