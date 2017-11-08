import { Component, Input } from '@angular/core';

const placeholdersMap = {
  'notes': {
    icon: 'notes',
    text: 'Your notes will be shown here'
  },
  'reminders': {
    icon: 'lightbulb_outline',
    text: 'Reminders will be shown here'
  },
  'trash': {
    icon: 'delete',
    text: 'Your deleted notes will be stored here'
  },
  'archive': {
    icon: 'archive',
    text: 'Here you will see outdated events and archived notes'
  },
  'tags': {
    icon: 'label',
    text: 'There are no notes with this tag'
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
    this.placeholder = placeholdersMap[this.placeholderType];
  }


}
