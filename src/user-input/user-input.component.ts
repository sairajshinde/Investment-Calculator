import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../app/investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
@Output() calculate=new EventEmitter<InvestmentInput>();

  enteredinitialinvestment="";
  enteredannualinvestment="";
  enteredexpectedreturn="";
  enteredduration="";
  onSubmit(){
    this.calculate.emit({
      initialInvestment:+this.enteredinitialinvestment,
      duration:+this.enteredduration,
      expectedReturn:+this.enteredexpectedreturn,
      annualInvestment:+this.enteredannualinvestment});
  }

}
