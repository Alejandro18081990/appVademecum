import { Component, OnInit } from '@angular/core';
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
  constructor(private router: ActivatedRoute, private service: VademecumService) {
    this.nRegistro = "";
  }

  ngOnInit() {
    this.router.params.subscribe((params) => { this.nRegistro = params['nRegistro'] });
  }

  getDetalleMedicamento() {
    this.service.getMedicamento(this.nRegistro).subscribe(respuesta => { this.detalleMedicamento = respuesta 
    console.log(this.detalleMedicamento);
    });
  }

}
