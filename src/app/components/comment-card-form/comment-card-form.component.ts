import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/models';

@Component({
  selector: 'app-comment-card-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-card-form.component.html',
  styles: []
})
export class CommentCardFormComponent {
  @Input({ required: true }) btnType: 'reply' | 'send'  = 'send'
  @Input({ required: true }) currentUser: User | undefined

  constructor() {}
}
