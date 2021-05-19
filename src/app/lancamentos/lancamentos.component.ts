import { Component, OnInit } from '@angular/core';

export interface Lancamento {
  descricao: string;
  valor: number;
}

const ELEMENT_DATA: Lancamento[] = [
  {descricao: 'Pago de contas', valor: 1900.00},
  {descricao: 'Envio dinero Cuba', valor: 700.00},
  {descricao: 'Electricita', valor: 1500.00},
  {descricao: 'Comprar de ferramentas de pintura', valor: 1900.00}
];

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements OnInit {

  displayedColumns: string[] = ['descricao', 'valor'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
