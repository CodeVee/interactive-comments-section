import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentContainerComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CommentContainerComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {

}
