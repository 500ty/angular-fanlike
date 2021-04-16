import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HrefDirective } from '@shared/directives/href.directive';

const directivesArr = [
  HrefDirective,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...directivesArr
  ],
  exports: [
    ...directivesArr
  ]
})
export class DirectivesModule {
}
