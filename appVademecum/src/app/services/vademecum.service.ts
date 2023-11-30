import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medicamentos } from '../interfaces/medicamentos';
import { HttpClient } from '@angular/common/http';
import { Medicamento } from '../interfaces/medicamento';
@Injectable({
  providedIn: 'root'
})
export class VademecumService {
  urlAll: string = `${environment.apiUrl}medicamentos?/resultados/`;
  urlOne: string = `${environment.apiUrl}medicamento?nregistro=`;
  constructor(private http: HttpClient) { }

  getAll(): Observable<Medicamentos> {
    return this.http.get<Medicamentos>(this.urlAll);
  }

  getMedicamento(nregistro: string): Observable<Medicamento> {
    const urlBusqueda = `${this.urlOne}${nregistro}`
    return this.http.get<Medicamento>(urlBusqueda);
  }
}
