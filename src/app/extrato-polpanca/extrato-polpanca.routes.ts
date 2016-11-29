import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtratoPolpancaComponent } from './extrato-polpanca.component';

const routes: Routes = [
  {
    path: '', component: ExtratoPolpancaComponent,
    // children: [
    //   { path: '',    component: ExtratoPolpancaListComponent },
    //   { path: ':id', component: ExtratoPolpancaDetailComponent },
    // ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtratoPolpancaRoutingModule {}
