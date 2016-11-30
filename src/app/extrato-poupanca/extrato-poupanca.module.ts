import { NgModule } from '@angular/core';
import { ExtratoPoupancaComponent } from './extrato-poupanca.component';
import { ExtratoPoupancaRoutingModule } from './extrato-poupanca.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ExtratoPoupancaRoutingModule,
  ],
  declarations: [
    ExtratoPoupancaComponent,
  ],
  exports: [
  ],
})
export class ExtratoPoupancaModule { }
