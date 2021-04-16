import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '@shared/directives/directives.module';

const sharedComponents = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    // Directives
    DirectivesModule
    // Pipe

    // 3rd party

  ],
  declarations: [
    ...sharedComponents
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    // Directives

    // Pipe
    DirectivesModule,

    // 3rd party

    // modules
    ...sharedComponents
  ]
})
export class SharedAppModule {
}
