import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-chatpot',
  standalone: true,
  imports: [],
  templateUrl: './chatpot.component.html',
  styleUrl: './chatpot.component.scss',
})
export class ChatpotComponent {
  @Input() isChatbotOpen = false;

  toggleChatbot() {
    this.isChatbotOpen = !this.isChatbotOpen;
  }
}
