import { Component, OnInit } from '@angular/core';
import { Medicamentos } from '../interfaces/medicamentos';
import { ActivatedRoute } from '@angular/router';
import { VademecumService } from '../services/vademecum.service';
import { Medicamento } from '../interfaces/medicamento';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-medicamento',
  templateUrl: './detalle-medicamento.page.html',
  styleUrls: ['./detalle-medicamento.page.scss'],
})
export class DetalleMedicamentoPage implements OnInit {
  nRegistro: string;
  detalleMedicamento!: Medicamento;
  urlFotos !: string;
  
  constructor(private router: ActivatedRoute, private service: VademecumService, private loadingCtrl : LoadingController) {
    this.nRegistro = "";
    
  }

  ngOnInit() {
    this.router.params.subscribe((params) => { this.nRegistro = params['nRegistro'] });
    this.manejoFotos()
    this.getDetalleMedicamento();

  }

  async getDetalleMedicamento() {
    const loading = await this.loadingCtrl.create({message: "Cargando ... Espere por favor..."});
    loading.present();
    this.service.getMedicamento(this.nRegistro).subscribe(respuesta => {
      this.detalleMedicamento = respuesta;
      loading.dismiss();
    });
  }

  manejoFotos() {
    this.urlFotos = "https://cima.aemps.es/cima/fotos/thumbnails/materialas/" + this.nRegistro + "/" + this.nRegistro + "_materialas.jpg";
  }

}
