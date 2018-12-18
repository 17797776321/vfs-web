import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(
    private routeInfo:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    console.log(this.router)
    console.log(this.routeInfo)
  }
  logoUrl:string = 'http://img0.imgtn.bdimg.com/it/u=1560305741,2588386831&fm=200&gp=0.jpg'
  closeMenu(e):void {
    // $('#bs-example-navbar-collapse-1').collapse('hide')
  }
}
