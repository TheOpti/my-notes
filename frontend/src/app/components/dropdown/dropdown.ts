import {
  Component,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.html',
  styleUrls: ['./dropdown.scss']
})
export class DropdownComponent {
  constructor(public eRef: ElementRef) { }

  @HostBinding('class.is-open')
  isOpen = false;

  @HostBinding('style.top.px')
  top: number;

  @HostBinding('style.left.px')
  left: number;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  setCoordinates(distances) {
    this.top = distances.top;
    this.left = distances.left;
  }

}
