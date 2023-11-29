import { Component, OnInit } from '@angular/core';
import { VademecumService } from '../services/vademecum.service';
import { Medicamento } from '../interfaces/medicamento';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  vademecum!: Medicamento;
  constructor(private service: VademecumService) {

  }

  ngOnInit(): void {
    this.getListadoMedicamentos();

  }

  getListadoMedicamentos() {
    this.service.getAll().subscribe(medicamentos => {
      this.vademecum = medicamentos
    });
  }
}