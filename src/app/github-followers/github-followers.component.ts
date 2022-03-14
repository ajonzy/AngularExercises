import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../github-followers.service';

interface Follower {
  avatar_url: String,
  html_url: String,
  login: String
}

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers: Follower[] = []

  constructor(private service: GithubFollowersService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data: any) => {
        this.followers = data
      }
    })
  }

}
