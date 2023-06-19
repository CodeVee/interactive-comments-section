import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentCardComponent } from '../comment-card/comment-card.component';
import { UserComment } from '../../models';

@Component({
  selector: 'app-comment-container',
  standalone: true,
  imports: [CommonModule, CommentCardComponent],
  templateUrl: './comment-container.component.html',
  styles: []
})
export class CommentContainerComponent {
  @Input() comment!: UserComment
}
