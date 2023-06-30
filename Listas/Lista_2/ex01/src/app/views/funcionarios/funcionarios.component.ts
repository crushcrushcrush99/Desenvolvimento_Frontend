import { Component } from '@angular/core';
import Analista from 'src/app/models/analista';
import Gestor from 'src/app/models/gestor';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent {

    public analistas: Analista[] = new Array<Analista>();
    public gestor: Gestor = new Gestor("Maria", 1929383, "Gestoria de TI", []);

    constructor(){
      this.analistas.push(new Analista("Thompson", 121314, "Analista de infraestructura", this.gestor.nombre));
      this.analistas.push(new Analista("Amanda", 131517, "Analista de sistemas", this.gestor.nombre));
      this.analistas.push(new Analista("John", 131518, "Analista de sistemas", this.gestor.nombre));
      this.analistas.push(new Analista("Elizabete", 131519, "Analista de sistemas", this.gestor.nombre));
      this.analistas.push(new Analista("Marcia", 131516, "Analista de cloud", this.gestor.nombre));
      this.analistas.push(new Analista("Robert", 131515, "Analista de cyber-security", this.gestor.nombre));
      this.analistas.push(new Analista("Albert", 131514, "Analista de negocios", this.gestor.nombre));
      this.analistas.push(new Analista("Ana", 131513, "Analista de sistemas", this.gestor.nombre));
      this.analistas.push(new Analista("Willian", 131512, "Analista de sistemas", this.gestor.nombre));
      this.analistas.push(new Analista("Alfred", 131511, "Analista de sistemas", this.gestor.nombre));
      this.analistas.push(new Analista("Junior", 131514, "Analista de sistemas", this.gestor.nombre));
      this.analistas.push(new Analista("Alessandra", 131523, "Analista de sistemas", this.gestor.nombre));

      this.gestor.nombreSubordinados = this.analistas.map(analista => analista.nombre);
    }


  }
