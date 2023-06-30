import { RouterModule, Routes } from "@angular/router";
import { FuncionariosComponent } from "./views/funcionarios/funcionarios.component";
import { NgModule } from "@angular/core";
import { RegistroComponent } from "./views/registro/registro.component";
import { LoginComponent } from "./views/login/login.component";


const routes: Routes = [
    { path: '', component: FuncionariosComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registro', component: RegistroComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
