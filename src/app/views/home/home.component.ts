import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  bannerUrl:string = '../../../assets/images/banner.png'
  titleText:string = '一站式服务  助力企业转型'
  desText:string = '十大行业解决方案  数百款营销活动 公众号'
  serviceItems:any[] = [
    new ServiceItems('../../../assets/images/service1.png','电商平台'),
    new ServiceItems('../../../assets/images/service2.png','微信营销'),
    new ServiceItems('../../../assets/images/service3.png','APP定制'),
    new ServiceItems('../../../assets/images/service4.png','系统开发'),
    new ServiceItems('../../../assets/images/service5.png','网站建设'),
    new ServiceItems('../../../assets/images/service6.png','客户案例')
  ]
  constructor() {}

  ngOnInit() {
    console.log(this.serviceItems)
  }
}

export class ServiceItems {
  constructor(
    public imgUrl:string,
    public text:string
  ){}
}