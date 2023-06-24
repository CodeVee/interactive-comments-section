import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment-card-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment-card-form.component.html',
  styles: []
})
export class CommentCardFormComponent implements OnChanges {
  @Input({ required: true }) btnType: 'reply' | 'send'  = 'send'
  @Input({ required: true }) currentUser: User | undefined
  @Input() otherUsername: string | undefined
  comment = ''



  ngOnChanges() {
    if (this.btnType === 'reply') {
      this.comment = `@${this.otherUsername} `
    }
  }
}
