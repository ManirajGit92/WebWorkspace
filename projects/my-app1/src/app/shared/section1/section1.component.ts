import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.scss',
})
export class Section1Component {
  backgroundImage = 'url("assets/images/background.jpg")';
  ngAfterViewInit() {
    const infos = document.querySelectorAll('.info');
    let currentIndex = 0;

    setInterval(() => {
      infos.forEach((info, index) => {
        info.classList.remove('active');
        if (index === currentIndex) {
          info.classList.add('active');
        }
      });

      currentIndex = (currentIndex + 1) % infos.length;
    }, 3000); // 3 sec interval
  }
}
