import { Component, ViewChild } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  //       @ViewChild('modal') modal!: HTMLDivElement; // For an HTML element

  // openModal(){
  //   log(this.modal)
  //   this.modal.classList.toggle('flex');
  // }
}
