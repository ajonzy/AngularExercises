import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  @Input("is-liked") isLiked = false
  @Input("likes-count") likesCount = 0
  @Output("change") change = new EventEmitter
  faHeart = faHeart

  handleClick() {
    this.change.emit({
      isLiked: !this.isLiked,
      newCount: this.isLiked ? this.likesCount - 1 : this.likesCount + 1
    })
  }
}

export interface LikeChangeEventArgs {
  isLiked: boolean,
  newCount: number
}
