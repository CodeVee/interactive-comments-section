import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-button.component.html',
  styles: ['']
})
export class CommentButtonComponent {
  @Input({ required: true }) btnType: 'reply' | 'edit' | 'delete' = 'reply'
  @Output() btnClicked = new EventEmitter<void>()

  clickBtn() {
    this.btnClicked.emit()
  }
}
