import { Component, OnInit } from '@angular/core';
import { VademecumService } from '../services/vademecum.service';
import { Medicamentos } from '../interfaces/medicamentos';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  vademecum!: Medicamentos;
  constructor(private service: VademecumService , private loadingCtrl : LoadingController) {

  }

  ngOnInit(): void {
    this.getListadoMedicamentos();

  }

  async getListadoMedicamentos() {
    const loading = await this.loadingCtrl.create({message: "Cargando ... Espere por favor..."});
    loading.present();
    this.service.getAll().subscribe(medicamentos => {
      this.vademecum = medicamentos
      loading.dismiss();
    });
  }
}