import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private animalService: AnimalService){
  }

  public animais!: Animal[];

  ngOnInit(): void {
    this.animalService.getAnimais().subscribe((response) => {
      this.animais = response
      console.log(this.animais)
    });



    /*this.animais.push(new Animal("123456", "Marrie", "SRD", 5));
    this.animais.push(new Animal("132334", "Marrie", "SRD", 5));
    this.animais.push(new Animal("2343556", "Marrie", "SRD", 5));
    this.animais.push(new Animal("6545323", "Marrie", "SRD", 5));*/
  }

}
