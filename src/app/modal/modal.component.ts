import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
@Input({required:true}) image:string='';

@Output() closeModal:EventEmitter<void> = new EventEmitter<void>();

onModalClick(event:MouseEvent):void{
  let target = event.target as HTMLElement;
  if(target.classList.contains('layer'))
  this.closeModal.emit()
}

@HostListener('document:keydown.escape',['$event'])
closeModalOnEscape(event:KeyboardEvent):void{
this.closeModal.emit()
}

}
