import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentButtonComponent } from '../comment-button/comment-button.component';
import { LikeCounterComponent } from '../like-counter/like-counter.component';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [CommonModule, CommentButtonComponent, LikeCounterComponent],
  templateUrl: './comment-card.component.html',
  styles: ['']
})
export class CommentCardComponent {}
