import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score-counter.component.html',
  styles: []
})
export class ScoreCounterComponent {

  @Input({ required: true }) score = 0
  @Output() scoreIncreased = new EventEmitter<void>()
  @Output() scoreDecreased = new EventEmitter<void>()

  increaseScore() {
    this.scoreIncreased.emit()
  }

  decreaseScore() {
    if (this.score === 0) {
      return;
    }
    this.scoreDecreased.emit()
  }
}
