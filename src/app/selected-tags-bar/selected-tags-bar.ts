import { Component, Input } from '@angular/core';

@Component({
  selector: 'selected-tags-bar',
  templateUrl: 'selected-tags-bar.html',
  styleUrls: ['selected-tags-bar.scss']
})
export class SelectedTagsBarComponent {

  @Input() selectedTags: any;

  constructor() { }

}
