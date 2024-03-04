import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.navigateAfterDelay(3500, '/home');
  }
}
