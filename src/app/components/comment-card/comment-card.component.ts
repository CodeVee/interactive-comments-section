import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentButtonComponent } from '../comment-button/comment-button.component';
import { ScoreCounterComponent } from '../score-counter/score-counter.component';
import { UserComment } from 'src/app/models';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [CommonModule, CommentButtonComponent, ScoreCounterComponent],
  templateUrl: './comment-card.component.html',
  styles: []
})
export class CommentCardComponent {
  @Input() comment!: UserComment

  increaseScore() {
    this.comment.score++
  }
  decreaseScore() {
    this.comment.score--
  }
}
