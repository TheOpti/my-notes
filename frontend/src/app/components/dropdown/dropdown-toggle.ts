import { Component, Input, HostListener } from '@angular/core';
import { DropdownComponent } from './dropdown';

@Component({
  selector: 'dropdown-toggle',
  templateUrl: './dropdown-toggle.html',
  styleUrls: ['./dropdown-toggle.scss']
})
export class DropdownToggleComponent {

  @Input() dropdown: DropdownComponent;

  @HostListener('click', ['$event'])
  click($event) {
    $event.stopPropagation();
    this.dropdown.toggle();
  }

}
