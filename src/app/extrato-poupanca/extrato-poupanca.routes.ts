import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtratoPoupancaComponent } from './extrato-poupanca.component';

const routes: Routes = [
  {
    path: '', component: ExtratoPoupancaComponent,
    // children: [
    //   { path: '',    component: ExtratoPoupancaListComponent },
    //   { path: ':id', component: ExtratoPoupancaDetailComponent },
    // ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtratoPoupancaRoutingModule {}
