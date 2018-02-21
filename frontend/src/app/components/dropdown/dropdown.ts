import {
  Component,
  ElementRef,
  HostBinding,
  HostListener
} from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.html',
  styleUrls: ['./dropdown.scss']
})
export class DropdownComponent {
  constructor(private eRef: ElementRef) { }

  @HostBinding('class.is-open')
  isOpen = false;

  @HostBinding('style.top.px')
  top: number;

  @HostBinding('style.left.px')
  left: number;

  @HostListener('document:click', ['$event'])
  clickout($event) {
    if (this.eRef.nativeElement.contains($event.target)) {
      console.log('clicked inside!');
    } else {
      console.log('clicked outside!');
      if (this.isOpen) {
        this.isOpen = false;
      }
    }
  }

  toggle(distances) {
    this.top = distances.top;
    this.left = distances.left;
    this.isOpen = !this.isOpen;
  }

}
