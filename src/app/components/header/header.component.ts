import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logoUrl:string = 'http://img0.imgtn.bdimg.com/it/u=1560305741,2588386831&fm=200&gp=0.jpg'
}
