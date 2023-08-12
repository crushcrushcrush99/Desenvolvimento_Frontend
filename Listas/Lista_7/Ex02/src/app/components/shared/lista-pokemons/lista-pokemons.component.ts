import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service'

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.css']
})
export class ListaPokemonsComponent  implements OnInit{

  constructor(private pokemonService: PokemonService) {}

  public pokemons: any[] = [];

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((response: any) => {
      console.log(response.results)
      for(let pokemon of response.results) {
        this.pokemonService.getInfoPokemon(pokemon.name).subscribe((res: any) => {
          this.pokemons.push(res)
          console.log(res)
        })
      }
    })
  }

}
