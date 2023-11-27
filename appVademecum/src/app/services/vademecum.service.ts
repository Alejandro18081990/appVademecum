import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VademecumService {
  url: string = "https://cima.aemps.es/cima/rest/medicamento?nregistro=51347"
  constructor() { }
}
