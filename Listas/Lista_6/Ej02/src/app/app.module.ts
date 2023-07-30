import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';
import { HomeComponent } from './components/views/home/home.component';
import { AgregarProductoComponent } from './components/views/producto/agregar-producto/agregar-producto.component';
import { ListaProductoComponent } from './components/views/producto/lista-producto/lista-producto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubMenuComponent,
    HomeComponent,
    AgregarProductoComponent,
    ListaProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
