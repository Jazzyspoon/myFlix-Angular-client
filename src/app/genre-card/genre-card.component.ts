import { Component, OnInit, Inject } from '@angular/core';

// Angular Material
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-genre',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.scss'],
})
export class GenreCardComponent implements OnInit {
  /**
   * Data from the movie-card component
   * @param data
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      description: string;
    }
  ) {}

  ngOnInit(): void {}
}
