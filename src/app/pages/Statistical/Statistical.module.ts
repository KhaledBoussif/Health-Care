import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StatisticalPage } from './Statistical.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([{ path: '', component: StatisticalPage }])
  ],
  declarations: [StatisticalPage]
})
export class StatisticalPageModule {}
