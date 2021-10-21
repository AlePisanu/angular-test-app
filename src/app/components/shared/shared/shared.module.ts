import { CardComponent } from './tab-item/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [
  CardComponent
];
@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
