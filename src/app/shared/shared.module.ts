import { NgModule } from '@angular/core';
import { CommonModule }from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SomeWidgetComponent } from './some-widget/some-widget.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SomeWidgetComponent,
  ],
  exports: [
    SomeWidgetComponent,
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
