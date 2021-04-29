import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutsRoutingModule } from './payouts-routing.module';
import { PayoutsComponent } from './payouts.component';
import { MatRadioModule } from '@angular/material/radio';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { InlineSVGModule } from 'ng-inline-svg';
import { SharedAppModule } from '@shared/shared.module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslationModule } from '../../modules/i18n/translation.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [PayoutsComponent],
  imports: [
    CommonModule,
    PayoutsRoutingModule,
    MatRadioModule,
    CRUDTableModule,
    InlineSVGModule,
    SharedAppModule,
    NgbAlertModule,
    TranslationModule,
    MatSnackBarModule
  ]
})
export class PayoutsModule { }
