import { Component, OnInit } from '@angular/core';
import { Medicamentos } from '../interfaces/medicamentos';
import { ActivatedRoute } from '@angular/router';
import { VademecumService } from '../services/vademecum.service';
import { Medicamento } from '../interfaces/medicamento';

@Component({
  selector: 'app-detalle-medicamento',
  templateUrl: './detalle-medicamento.page.html',
  styleUrls: ['./detalle-medicamento.page.scss'],
})
export class DetalleMedicamentoPage implements OnInit {
  nRegistro: string;
  detalleMedicamento!: Medicamento;
  urlFotos !: string;
  esReceta: string;
  esGenerico: string;
  constructor(private router: ActivatedRoute, private service: VademecumService) {
    this.nRegistro = "";
    this.esReceta = "";
    this.esGenerico = "";
  }

  ngOnInit() {
    this.router.params.subscribe((params) => { this.nRegistro = params['nRegistro'] });
    this.manejoFotos()
    this.getDetalleMedicamento();

  }

  getDetalleMedicamento() {
    this.service.getMedicamento(this.nRegistro).subscribe(respuesta => {
      this.detalleMedicamento = respuesta;
    });
  }

  manejoFotos() {
    this.urlFotos = "https://cima.aemps.es/cima/fotos/thumbnails/materialas/" + this.nRegistro + "/" + this.nRegistro + "_materialas.jpg";
  }

  IonViewWillEnter() {
    if (this.detalleMedicamento != undefined) {
      if (this.detalleMedicamento.generico) {
        this.esGenerico = "Medicamento genérico";
      } else {
        this.esGenerico = "Medicamento no genérico";
      }

      if (this.detalleMedicamento.receta) {
        this.esReceta = "Medicamento sujeto a prescripción médica";
      } else {
        this.esReceta = "Medicamento no sujeto a prescripción médica";
      }
    }
  }

}
