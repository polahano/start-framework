import { Component, ViewChild, viewChild } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from '../modal/modal.component';
import { log } from 'console';


@Component({
  selector: 'app-portfolio',
  imports: [CardComponent,FontAwesomeModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  
openModal() {
  
}

faStar = faStar;
cards:Number[]=[1,2,3]

  portfolioItems = [
  { image: '/port1.png' },
  { image: '/port2.png' },
  { image: '/port3.png' },
  { image: '/port4.png' },
  { image: '/port5.png' },
  { image: '/port6.png' }
  ];

  //     @ViewChild('modal') modal!: HTMLDivElement; // For an HTML element

  // openModal(){
  //   log(this.modal)
  //   this.modal.classList.toggle('flex');
  // }

}
