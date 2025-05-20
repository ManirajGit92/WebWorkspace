import { Component, ElementRef, ViewChild } from '@angular/core';
import { Section1Component } from '../shared/section1/section1.component';
import { Section2Component } from '../shared/section2/section2.component';
import { Section3Component } from '../shared/section3/section3.component';
import { Section4Component } from '../shared/section4/section4.component';
import { Section5Component } from '../shared/section5/section5.component';
import { ChatpotComponent } from '../shared/chatpot/chatpot.component';

@Component({
  selector: 'app-theme1',
  standalone: true,
  imports: [
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    ChatpotComponent,
  ],
  templateUrl: './theme1.component.html',
  styleUrl: './theme1.component.scss',
})
export class Theme1Component {
  title: string = '';
  @ViewChild('home') homeSection!: ElementRef;
  @ViewChild('aboutus') aboutusSection!: ElementRef;
  @ViewChild('team') teamSection!: ElementRef;
  @ViewChild('blogs') blogSection!: ElementRef;
  @ViewChild('feedbacks') feedbacksSection!: ElementRef;
  @ViewChild('contactus') contactusSection!: ElementRef;

  scrollTo(section: string) {
    let target: any;
    switch (section) {
      case 'home':
        target = this.homeSection.nativeElement;
        break;
      case 'aboutus':
        target = this.aboutusSection.nativeElement;
        break;
      case 'team':
        target = this.teamSection.nativeElement;
        break;
      case 'blogs':
        target = this.blogSection.nativeElement;
        break;
      case 'feedbacks':
        target = this.feedbacksSection.nativeElement;
        break;
      case 'contactus':
        target = this.contactusSection.nativeElement;
        break;
    }
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
