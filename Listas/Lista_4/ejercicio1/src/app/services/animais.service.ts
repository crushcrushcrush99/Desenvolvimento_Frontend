import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService{
  getAnimais() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient){}

  buscarAnimais(): Observable<Animal[]>{
    return this.http.get<Animal[]>("http://localhost:8050/listar-animais");
  }
}
