import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentContainerComponent } from './components';
import { CommentService } from './services/comment.service';
import { UserComment } from './models'
import { take } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommentCardFormComponent } from './components/comment-card-form/comment-card-form.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CommentContainerComponent, CommentCardFormComponent, DeleteModalComponent],
  providers: [CommentService],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {

  comments = signal<UserComment[]>([])
  currentUser = this.service.currentUser
  constructor(private service: CommentService) {}

  ngOnInit(): void {
    this.service.getComments()
      .pipe(take(1))
      .subscribe(comments => this.comments.set(comments))
  }
}
