import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeCounterComponent } from '../like-counter/like-counter.component';
import { CommentButtonComponent } from '../comment-button/comment-button.component';

@Component({
  selector: 'app-comment-container',
  standalone: true,
  imports: [CommonModule, LikeCounterComponent, CommentButtonComponent],
  templateUrl: './comment-container.component.html',
  styles: []
})
export class CommentContainerComponent {}
