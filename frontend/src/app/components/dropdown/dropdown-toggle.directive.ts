import {
  Directive,
  Input,
  HostListener,
  ElementRef
} from "@angular/core";
import { DropdownComponent } from "./dropdown";

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
    console.log('$event ', $event);
    const { offsetX, clientX, offsetY, clientY } = $event;
    const distances = {
      left: clientX - offsetX,
      top: clientY - offsetY
    };

    $event.stopPropagation();
    this.dropdown.toggle(distances);
  }

}
