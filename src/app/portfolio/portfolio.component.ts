import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-portfolio',
  imports: [CardComponent,FontAwesomeModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
faStar = faStar;
cards:Number[]=[1,2,3]

  portfolioItems = [
  { image: '/src/assets/images/port1.png' },
  { image: 'assets/images/port2.png' },
  { image: 'assets/images/port3.png' },
  { image: 'assets/images/port4.png' },
  { image: 'assets/images/port5.png' },
  { image: 'assets/images/port6.png' }
  ];

}
