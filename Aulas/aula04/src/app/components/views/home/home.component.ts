import { Animal } from '../../../../../../../Listas/Lista_4/ejercicio1/src/app/models/animal';
import { AnimalService } from './../../../../../../../Listas/Lista_4/ejercicio1/src/app/services/animais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    public number!: number;

    ngOnInit(): void {
      this.number = 10;
    }

  }

 /* public animais!: Animal[];
  constructor(private animalService: AnimalService){
  }
  ngOnInit(): void {
    this.animalService.getAnimais()..subscribe((res) => {
    this.animais = res
    console.log(res)

    })
  }*/

