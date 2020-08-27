import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  @HostListener('wheel', ['$event'])
  onWheelScroll(evento: WheelEvent) {
    // Scroll down
    if (evento.deltaY > 0) {
      this.router.navigate(['experience'])
    } else { // Scroll up
      this.router.navigate(['about'])
    }
  }


}
