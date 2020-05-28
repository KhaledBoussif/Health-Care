import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalePageFoodPage } from './modale-page-food.page';

const routes: Routes = [
  {
    path: '',
    component: ModalePageFoodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalePageFoodPage]
})
export class ModalePageFoodPageModule {

 
}
