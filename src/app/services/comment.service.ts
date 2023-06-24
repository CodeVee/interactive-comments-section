import { Injectable, signal } from '@angular/core';
import { UserComment, DataResponse, User } from '../models';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentService {

  currentUser = signal<User | undefined>(undefined)

  private jsonURL = 'assets/data.json'

  constructor(private http: HttpClient) {}

  getComments(): Observable<UserComment[]> {

    return this.http.get<DataResponse>(this.jsonURL)
    .pipe(
      tap(data => this.currentUser.set(data.currentUser)),
      map(data => {
        return data.comments.map(comment => {
          comment.currentUser = comment.user.username === data.currentUser.username

          comment.replies = comment.replies.map(reply => {
            reply.currentUser = reply.user.username === data.currentUser.username
            return reply
          })
          return comment
        })
      })
    )
  }
}
