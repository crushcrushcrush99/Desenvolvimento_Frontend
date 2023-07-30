import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';



@Component({
  selector: 'app-adicionar-animal',
  templateUrl: './adicionar-animal.component.html',
  styleUrls: ['./adicionar-animal.component.css']
})
export class AdicionarAnimalComponent {
  public nome!: string;
  public raca!: string;
  public peso!: number;
  public foto!: string;

  constructor(private animalService: AnimalService, private router: Router){}

  public adicionarAnimal(){
    let animal = new Animal(this.nome,
                            this.raca,
                            this.peso,
                            this.foto);
    this.animalService.adicionarAnimal(animal)
    .subscribe((response) => {
      console.log(response);
    });
    this.router.navigate(["/"])
  }
}
