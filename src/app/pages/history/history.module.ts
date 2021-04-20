import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { ShareModule } from 'ngx-sharebuttons';
import { SharedAppModule } from '@shared/shared.module';
import { TranslationModule } from '../../modules/i18n/translation.module';


@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    CRUDTableModule,
    ReactiveFormsModule,
    InlineSVGModule,
    ShareModule,
    SharedAppModule,
    TranslationModule
  ]
})
export class HistoryModule {
}
