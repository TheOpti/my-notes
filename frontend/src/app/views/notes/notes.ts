import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NotesService } from '../../services/notes.service';
import { ActivatedRoute } from "@angular/router";
import NOTES_TYPES from '../../constants/notes_types';

const addNewNoteViews = [NOTES_TYPES.NOTES, NOTES_TYPES.TAGS, NOTES_TYPES.REMINDERS];

@Component({
  selector: 'notes',
  templateUrl: 'notes.html',
  styleUrls: ['notes.scss']
})
export class NotesComponent {

  private notes : any;
  private routeSubscription: Subscription;
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
    this.routeSubscription = this.route
      .data
      .subscribe(data => {
        this.notesType = NOTES_TYPES[data.type];
        this.canShowAddNoteComponent = this.checkCanShowAddNote(this.notesType);

        this.notes = this.notesService
          .getAllNotes()
          .filter(note => note.type === this.notesType);

        this.loading = false;

        this.notesSubscription = this.notesService.getMessage().subscribe(notes => {
          this.notes = notes.filter(note => note.type === this.notesType);
        });
      });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.notesSubscription.unsubscribe();
  }

  checkCanShowAddNote(noteType) {
    return addNewNoteViews.includes(noteType);
  }

}
