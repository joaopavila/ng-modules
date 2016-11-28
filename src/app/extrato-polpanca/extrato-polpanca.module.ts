import { NgModule } from '@angular/core';
import { ExtratoPolpancaComponent } from './extrato-polpanca.component';
import { ExtratoPolpancaRoutingModule } from './extrato-polpanca.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
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
