import {Component, ElementRef, HostBinding, HostListener} from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.html',
  styleUrls: ['./dropdown.scss']
})
export class DropdownComponent {
  constructor(private eRef: ElementRef) { }

  @HostBinding('class.is-open')
  isOpen = false;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      console.log('clicked inside!');
    } else {
      console.log('clicked outside!');
      if (this.isOpen) {
        this.isOpen = false;
      }
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
