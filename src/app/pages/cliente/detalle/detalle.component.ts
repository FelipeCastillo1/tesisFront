import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ModalService } from './modal.service';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  @Input() cliente: Cliente;
  titulo: string = 'Detalle del Cliente';
  constructor(
    private clienteService: ClienteService,
    public modalService:ModalService
  ) {}

  ngOnInit(): void {

  }
  cerrarModal():void{
    this.modalService.cerrarModal();
  }
}
