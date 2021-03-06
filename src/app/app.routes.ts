import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule',
  },
  {
    path: 'extrato-poupanca',
    loadChildren: 'app/extrato-poupanca/extrato-poupanca.module#ExtratoPoupancaModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
