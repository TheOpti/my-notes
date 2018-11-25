import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'icons-bar',
  templateUrl: 'icons-bar.html',
  styleUrls: ['icons-bar.scss']
})
export class IconsBarComponent {

  @Input() currentColor : string;
  @Input() reminder : any;
  @Input() selectedTags : any;
  @Input() isTagSelected : any;

  @Output() onColorSelect: EventEmitter<any> = new EventEmitter();
  @Output() onReminderSelect: EventEmitter<any> = new EventEmitter();
  @Output() onTagSelect: EventEmitter<any> = new EventEmitter();

  // @ViewChild('paletteMenuTrigger') paletteMenu: any;
  // @ViewChild('reminderMenuTrigger') reminderMenu: any;

  public tags = [];
  public colors = ['white', 'red', 'orange', 'yellow', 'grey', 'blue', 'sea', 'green'];
  public dateOptions = [
    {
      id: 'tomorrow-16',
      day: 'Today',
      time: '16:00'
    },
    {
      id: 'tomorrow-8',
      day: 'Tomorrow',
      time: '08:00'
    },
    {
      id: 'next-week-8',
      day: 'Next week',
      time: '12:00'
    },
  ];
  private subscription: any;

  constructor(private tagsService: TagsService) {
    this.tags = this.tagsService.getAllTags();

    this.subscription = this.tagsService.getMessage().subscribe(tags => {
      this.tags = tags;
    });
  }

  onMenuClick(event) {
    event.stopPropagation();
  }

  getClassFromColor(color) {
    return `color--${color}`;
  }

  setColor(color) {
    // this.paletteMenu.closeMenu();
    this.onColorSelect.emit(color);
  }

  setReminder(date) {
    // this.reminderMenu.closeMenu();
    this.onReminderSelect.emit(date);
  }

  handleTagSelection(tag) {
    this.onTagSelect.emit(tag);
  }

}
