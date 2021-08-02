import { Component, OnInit, Inject } from '@angular/core';

// Angular Material
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'synopsis-card',
  templateUrl: './synopsis-card.component.html',
  styleUrls: ['./synopsis-card.component.scss'],
})
export class SynopsisCardComponent implements OnInit {
  /**
   * Data from the movie-card component
   * @param data
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      synopsis: string;
    }
  ) {}

  ngOnInit(): void {}
}
