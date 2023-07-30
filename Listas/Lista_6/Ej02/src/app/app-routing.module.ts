
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { AgregarProductoComponent } from './components/views/producto/agregar-producto/agregar-producto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agregar-producto', component: AgregarProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
