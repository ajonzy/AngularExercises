import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input("is-favorite") isFavorite = false
  @Output("change") click = new EventEmitter()
  emptyStar = emptyStar
  solidStar = solidStar

  handleFavorite() {
    this.isFavorite = !this.isFavorite

    this.click.emit({
      newValue: this.isFavorite
    })
  }

  ngOnInit(): void {
  }

}

export interface FavoriteChangeEventArgs {
  newValue: boolean
}
