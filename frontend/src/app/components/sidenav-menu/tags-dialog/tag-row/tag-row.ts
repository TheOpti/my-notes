import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'tag-row',
  templateUrl: 'tag-row.html',
  styleUrls: ['tag-row.scss']
})
export class TagRowComponent {

  @Input() placeholder: string;
  @Input() type: string;
  @Input() tag: string;
  @Input() id: string;
  @Input() condition: boolean;

  @Output() onEnableEditingClick = new EventEmitter<any>();
  @Output() onInputIconClick = new EventEmitter<any>();
  @Output() onAcceptClick = new EventEmitter<any>();
  @Output() onDeleteClick = new EventEmitter<any>();

  private label: string;
  private editedTagIcon: string;
  private editedTagTooltip: string;

  ngOnInit() {
    this.label = this.type === 'add' ? 'Create new tag' : this.tag;
    this.editedTagIcon = this.type === 'add' ? 'close' : 'delete';
    this.editedTagTooltip = this.type === 'add' ? 'Cancel' : 'Delete';
  }

  enableEditing() {
    this.onEnableEditingClick.emit();
  }

  inputIconClick() {
    this.onInputIconClick.emit();
  }

  acceptClick() {
    this.onAcceptClick.emit(this.tag);
    // TODO create separate component for adding and editing tags
    // this.tag = '';
  }

  deleteTag() {
    this.onDeleteClick.emit(this.id);
  }

}
