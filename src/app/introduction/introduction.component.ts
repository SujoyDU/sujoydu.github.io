import { Component, OnInit, HostListener } from '@angular/core';
import {Router } from '@angular/router'

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  @HostListener('wheel', ['$event'])
  onWheelScroll(evento: WheelEvent) {
    // Scroll up
    if (evento.deltaY > 0) {
      this.router.navigate(['education'])
    }
  }

}
