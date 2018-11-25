import {
  Directive,
  Input,
  HostListener,
  ElementRef
} from '@angular/core';
import { DropdownComponent } from './dropdown';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.cursor = 'pointer';
  }

  @Input() dropdown: DropdownComponent;

  @HostListener('click', ['$event'])
  click($event) {
    console.log('click $event ', $event);
    const { offsetX, clientX, offsetY, clientY } = $event;
    const distances = {
      left: clientX - offsetX,
      top: clientY - offsetY
    };

    this.dropdown.open();
    this.dropdown.setCoordinates(distances);
  }

  @HostListener('document:click', ['$event'])
  clickout($event) {
    if ($event.target !== this.dropdown.eRef.nativeElement.parentElement.firstElementChild) {
      this.dropdown.close();
    }
  }

}
