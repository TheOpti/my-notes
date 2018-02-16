import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { Subscription } from 'rxjs/Subscription';

import { NotesService } from '../../services/notes.service';
import { ActivatedRoute } from "@angular/router";
import NOTES_TYPES from '../../constants/notes_types';

const addNewNoteViews = [
  NOTES_TYPES.NOTES,
  NOTES_TYPES.TAGS,
  NOTES_TYPES.REMINDERS
];

@Component({
  selector: 'notes',
  templateUrl: 'notes.html',
  styleUrls: ['notes.scss']
})
export class NotesComponent {

  private notes : any;
  private params : any;
  private subscription: Subscription;
  private notesSubscription: Subscription;
  private loading: boolean;
  private notesType: string;
  private canShowAddNoteComponent: boolean;

  constructor(private notesService: NotesService, private route: ActivatedRoute) {
    this.notes = [];
    this.loading = true;
    this.notesType = '';
    this.canShowAddNoteComponent = true;
  }

  ngOnInit() {
    this.subscription = Observable
      .combineLatest(this.route.data, this.route.params)
      .subscribe(([data, params]) => {
        console.log('subscribe this.route.data');

        this.notesType = NOTES_TYPES[data.type];
        this.canShowAddNoteComponent = this.checkCanShowAddNote(this.notesType);
        this.notes = this.notesService.getAllNotes();
        this.params = params;
        this.filterNotes(this.notes);

        this.notesSubscription = this.notesService.getMessage().subscribe(notes => {
          this.filterNotes(notes);
        });

        this.loading = false;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.notesSubscription.unsubscribe();
  }

  filterNotes(notes) {
    const tagName = this.params.name;
    if (this.notesType === NOTES_TYPES.TAGS) {
      this.notes = notes.filter(note => {
        return note.tags.some(tag => {
          return tag.name === tagName;
        });
      });
    } else {
      this.notes = notes.filter(note => note.type === this.notesType);
    }
  }

  checkCanShowAddNote(noteType) {
    return addNewNoteViews.includes(noteType);
  }

}
