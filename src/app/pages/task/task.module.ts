import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { ShareModule } from 'ngx-sharebuttons';
import { SharedAppModule } from '@shared/shared.module';
import { TranslationModule } from '../../modules/i18n/translation.module';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    CRUDTableModule,
    ReactiveFormsModule,
    InlineSVGModule,
    ShareModule,
    SharedAppModule,
    TranslationModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class TaskModule {
}
