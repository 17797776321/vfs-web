import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  items:number[] = [
    1,2,3,4,5,6,7,8,9
  ]
  bannerUrl:string = '../../../assets/images/banner.png'
  titleText:string = '一站式服务  助力企业转型'
  desText:string = '十大行业解决方案  数百款营销活动 公众号'
  constructor() { }

  ngOnInit() {
  }

}
