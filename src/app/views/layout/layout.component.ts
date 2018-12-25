import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  animations:[
    slideInAnimation
  ]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet)
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
