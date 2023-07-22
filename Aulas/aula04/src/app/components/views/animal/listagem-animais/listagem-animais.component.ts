import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from '../../../../../../../../Listas/Lista_4/ejercicio1/src/app/models/animal';

@Component({
  selector: 'app-listagem-animais',
  templateUrl: './listagem-animais.component.html',
  styleUrls: ['./listagem-animais.component.css']
})
export class ListagemAnimaisComponent implements OnInit {

  constructor(private animalService: AnimalService){}

  public animais!: Animal[];

  ngOnInit(): void {
    this.animalService.getAnimais()
      .subscribe((res: Animal[]) => {
        this.animais = res
        /*console.log(res)*/
      });
  }
}
