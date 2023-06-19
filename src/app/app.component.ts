import { Component, OnInit, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentContainerComponent } from './components';
import { CommentService } from './services/comment.service';
import { Comment } from './models'
import { take } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CommentContainerComponent],
  providers: [CommentService],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {

  comments = signal<Comment[]>([])
  constructor(private service: CommentService) {}

  ngOnInit(): void {
    this.service.getComments()
      .pipe(take(1))
      .subscribe(comments => this.comments.set(comments));
  }
}
