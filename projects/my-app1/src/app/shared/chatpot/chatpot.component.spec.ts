import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatpotComponent } from './chatpot.component';

describe('ChatpotComponent', () => {
  let component: ChatpotComponent;
  let fixture: ComponentFixture<ChatpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatpotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
