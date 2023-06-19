import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentCardComponent } from '../comment-card/comment-card.component';

@Component({
  selector: 'app-comment-container',
  standalone: true,
  imports: [CommonModule, CommentCardComponent],
  templateUrl: './comment-container.component.html',
  styles: []
})
export class CommentContainerComponent {}
