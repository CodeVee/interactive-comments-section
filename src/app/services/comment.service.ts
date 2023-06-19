import { Injectable, signal } from '@angular/core';
import { Comment, DataResponse, User } from '../models';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentService {

  currentUser = signal<User | null>(null)

  private jsonURL = 'assets/data.json'

  constructor(private http: HttpClient) {}

  getComments(): Observable<Comment[]> {

    return this.http.get<DataResponse>(this.jsonURL)
    .pipe(
      tap(data => this.currentUser.set(data.currentUser)),
      map(data => data.comments)
    )
  }
}
