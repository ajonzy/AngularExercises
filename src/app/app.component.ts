import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';
import { LikeChangeEventArgs } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: false
  }

  onFavoriteChange(eventArgs: FavoriteChangeEventArgs) {
    console.log("Favorite changed: ", eventArgs)
  }

  tweet = {
    body: "Here is the body of the tweet...",
    isLiked: false,
    likesCount: 0
  }

  onLikeChange(eventArgs: LikeChangeEventArgs) {
    this.tweet.isLiked = eventArgs.isLiked
    this.tweet.likesCount = eventArgs.newCount
  }
}
