import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutsRoutingModule } from './payouts-routing.module';
import { PayoutsComponent } from './payouts.component';
import { MatRadioModule } from '@angular/material/radio';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { SharedAppModule } from '@shared/shared.module';


@NgModule({
  declarations: [PayoutsComponent],
  imports: [
    CommonModule,
    PayoutsRoutingModule,
    MatRadioModule,
    CRUDTableModule,
    InlineSVGModule,
    SharedAppModule
  ]
})
export class PayoutsModule { }
