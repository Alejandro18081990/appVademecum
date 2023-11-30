import { Component, OnInit } from '@angular/core';
import { VademecumService } from '../services/vademecum.service';
import { Medicamentos } from '../interfaces/medicamentos';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  vademecum!: Medicamentos;
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