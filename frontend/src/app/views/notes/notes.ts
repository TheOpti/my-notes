import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NotesService } from '../../services/notes.service';
import { ActivatedRoute } from "@angular/router";
import NOTES_TYPES from '../../constants/notes_types';

@Component({
  selector: 'notes',
  templateUrl: 'notes.html',
  styleUrls: ['notes.scss']
})
export class NotesComponent {

  private notes : any;
  private subscription: Subscription;
  private loading: boolean;
  private notesType: string;

  constructor(private notesService: NotesService, private route: ActivatedRoute) {
    this.notes = [];
    this.loading = true;
    this.notesType = '';
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(data => {
        this.notesType = NOTES_TYPES[data.type];

        this.notesService.getAllNotes().then((notes: Array<any>) => {
          this.notes = notes.filter(note => note.type === this.notesType);
          this.loading = false;
        });

        this.subscription = this.notesService.getMessage().subscribe(notes => {
          this.notes = notes.filter(note => note.type === this.notesType);
        });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
