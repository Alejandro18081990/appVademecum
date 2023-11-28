import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medicamento } from '../interfaces/medicamento';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VademecumService {
  url: string = `${environment.apiUrl}medicamentos?/resultados/`;
  constructor(private http : HttpClient) { }
  
  getAll(): Observable<Medicamento>{
    return this.http.get<Medicamento>(this.url);
  }
}
