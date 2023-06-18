import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-like-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './like-counter.component.html',
  styles: []
})
export class LikeCounterComponent {

  count = signal(0)

  increaseCount() {
    this.count.update(c => c + 1)
  }

  decreaseCount() {
    if (this.count() === 0) {
      return;
    }
    this.count.update(c => c - 1)
  }
}
