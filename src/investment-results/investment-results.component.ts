import { Component, Input } from '@angular/core';
import type{ InvestmentResult } from '../app/investment-input.model';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() results?:(InvestmentResult)[];


}
