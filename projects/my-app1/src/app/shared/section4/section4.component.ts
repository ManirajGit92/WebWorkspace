import { Component } from '@angular/core';
import { ChatpotComponent } from '../chatpot/chatpot.component';

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [ChatpotComponent],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.scss',
})
export class Section4Component {
  isChatbotOpen = false;
  toggleChatbot() {
    this.isChatbotOpen = !this.isChatbotOpen;
  }
}
