import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public juegos: Juego[] = [];

  ngOnInit(): void {
    this.juegos.push(new Juego("1234", "Dark Souls 3", "Souls Like", "11 de Abril 2016", "FromSoftware",
    "https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png"));
    this.juegos.push(new Juego("1323", "Hollow Knight", "Metroidvania", "24 de Febrero 2017", "Team Cherry",
    "https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028"));
    this.juegos.push(new Juego("2343", "Little Misfortune", "Point and Click", "18 de Septiembre 2019", "Killmonday Games AB",
    "https://media.tycsports.com/files/2022/09/19/481094/trailer-de-little-misfortunf_1440x810.webp"));
    this.juegos.push(new Juego("6545", "Undertale", "RPG, Puzle", "15 de Septiembre 2015", "TobyFox",
    "https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2016/05/20/2D2D6AEA-7471-4616-A4F2-E1EE5CDCFFA0/98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=high&format=webply"));
    this.juegos.push(new Juego("6564", "Stardew Valley", "Farm Simulator, RPG", "26 de Febrero 2016", "ConcernedApe",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1666917466"));
    this.juegos.push(new Juego("6442", "Nier:Automata", "Hack and Slash", "17 de Marzo 2017", "Square Enix",
    "https://www.platinumgames.com/wp-content/uploads/2016/03/nier_ec_en.jpg"));
    this.juegos.push(new Juego("6622", "Mortal Kombat 11", "Fighting game", "23 de Abril de 2019", "NetherRealm Studios",
    "https://cdn.akamai.steamstatic.com/steam/apps/976310/header.jpg?t=1684790351"));
    this.juegos.push(new Juego("6622", "Metal Gear Solid V", "Stealth game", "1 de Septiembre 2015", "Konami Digital Entertainment",
    "https://www.konami.com/kde_cms/eu_publish/uploads/MGS-TDE_1280x720-1024x576.png"));
    this.juegos.push(new Juego("3412", "God of War", "RPG, Hack and Slash", "20 de Abril 2018", "Santa Monica Studio",
    "https://assetsio.reedpopcdn.com/-1634741977375.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"))
  }

}




