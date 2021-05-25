import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.scss']
})
export class FuncionarioCardComponent {

  @Input() funcionario: any;
  @Input() i: any;

}
