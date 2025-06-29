import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild('navbar') navbar!:any;

  @HostListener('window:scroll',[])
  onScroll():void{
    if(window.scrollY > 10){
      this.navbar.nativeElement.classList.replace('py-4','py-2')
    } else{
      this.navbar.nativeElement.classList.replace('py-2','py-4')
    }
  }

  
}
