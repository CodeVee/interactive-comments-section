import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentButtonComponent } from '../comment-button/comment-button.component';
import { ScoreCounterComponent } from '../score-counter/score-counter.component';
import { UserComment } from 'src/app/models';
import { CommentCardFormComponent } from '../comment-card-form/comment-card-form.component';
import { CommentService } from 'src/app/services/comment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [CommonModule, CommentButtonComponent, ScoreCounterComponent, CommentCardFormComponent, FormsModule],
  templateUrl: './comment-card.component.html',
  styles: []
})
export class CommentCardComponent {
  @Input() comment!: UserComment
  isReplyState = false
  isEditState = false
  currentUser = this.service.currentUser
  updateComment = ''

  constructor(private service: CommentService) {}

  increaseScore() {
    this.comment.score++
  }
  decreaseScore() {
    this.comment.score--
  }

  toggleReplyForm() {
    this.isReplyState = !this.isReplyState
    this.isEditState = false
  }

  toggleEditForm() {
    this.isEditState = !this.isEditState
    this.isReplyState = false

    if (this.isEditState) {
      this.updateComment = `@${this.comment.replyingTo} ${this.comment.content}`
    } else {
      this.updateComment = ''
    }
  }

  showDeleteModal() {
    this.isEditState = false
    this.isReplyState = false
    this.service.setModalMode()
  }
}
