import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-biding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-biding.component.html',
  styleUrl: './template-biding.component.scss',
})
export class TemplateBidingComponent {
  public name = 'Ivanildo Cândido';
  public age = 19;

  public disabled = true;
  public title = 'Cadastro';
  public legend = this.age < 18 ? 'Menor de Idade' : 'Adulto';
  public styleBold = this.age < 18 ? 'bold' : 'none';

  public operation(operator: '+' | '-') {
    if (operator === '+') {
      return this.age++;
    } else {
      return this.age--;
    }
  }
  public coordinates = '';
  public onMouseMove(event: MouseEvent) {
    return (this.coordinates = `X: ${event.clientX} Y: ${event.clientY}`);
  }
}
