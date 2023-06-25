import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-modal.component.html',
  styles: []
})
export class DeleteModalComponent {
  @Output() modalClosed = new EventEmitter<void>()

  close() {
    this.modalClosed.emit()
  }
}
