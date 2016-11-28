import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'extrato-polpanca', loadChildren: 'app/extrato-polpanca/extrato-polpanca.module#ExtratoPolpancaModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
