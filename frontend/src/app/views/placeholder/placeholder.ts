import { Component, Input } from '@angular/core';
import NOTES_TYPES from '../../constants/notes_types';

const placeholdersMap = {
  [NOTES_TYPES.NOTES]: {
    icon: 'notes',
    text: 'Your notes will be shown here'
  },
  [NOTES_TYPES.REMINDERS]: {
    icon: 'lightbulb_outline',
    text: 'Reminders will be shown here'
  },
  [NOTES_TYPES.TRASH]: {
    icon: 'delete',
    text: 'Your deleted notes will be stored here'
  },
  [NOTES_TYPES.ARCHIVE]: {
    icon: 'archive',
    text: 'Here you will see outdated events and archived notes'
  },
  [NOTES_TYPES.TAGS]: {
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
