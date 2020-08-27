import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  @HostListener('wheel', ['$event'])
  onWheelScroll(evento: WheelEvent) {
    // Scroll up
    if (evento.deltaY < 0) {
      this.router.navigate(['experience'])
    }
  }
}
