import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtratoPolpancaComponent } from './extrato-polpanca.component';
import { ExtratoPolpancaRoutingModule } from './extrato-polpanca.routes';

@NgModule({
  imports: [
    CommonModule,
    ExtratoPolpancaRoutingModule,
  ],
  declarations: [
    ExtratoPolpancaComponent,
    ],
  exports: [
    ExtratoPolpancaComponent,
  ],
})
export class ExtratoPolpancaModule { }
