import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  @HostListener('wheel', ['$event'])
  onWheelScroll(evento: WheelEvent) {
    // Scroll down
    if (evento.deltaY > 0) {
      this.router.navigate(['education'])
    } else { // Scroll up
      this.router.navigate(['about'])
    }
  }

}
