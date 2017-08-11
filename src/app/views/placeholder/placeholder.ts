import { Component, Input } from '@angular/core';

const placeholdersMap = {
  'notes': {
    icon: 'notes',
    text: 'Your notes will be shown here'
  },
  'reminders': {
    icon: 'lightbulb_outline',
    text: 'Reminders will be shown here'
  }
};

@Component({
  selector: 'placeholder',
  templateUrl: 'placeholder.html',
  styleUrls: ['placeholder.scss']
})
export class PlaceholderComponent {

  private placeholder : object;
  @Input() placeholderType: string;

  constructor() {
    this.placeholder = {};
  }

  ngOnInit() {
    console.log('this.placeholderType', this.placeholderType);
    this.placeholder = placeholdersMap[this.placeholderType];
  }


}
