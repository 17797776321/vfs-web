import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { Router } from '@angular/router';
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
    new ServiceItems('../../../assets/images/service1.png','电商平台',false,'onlineretailers'),
    new ServiceItems('../../../assets/images/service2.png','微信营销',true,'wechatmarketing'),
    new ServiceItems('../../../assets/images/service3.png','APP定制',true,'customized'),
    new ServiceItems('../../../assets/images/service4.png','系统开发',false,'systemdev'),
    new ServiceItems('../../../assets/images/service5.png','网站建设',false,'website'),
    new ServiceItems('../../../assets/images/service6.png','客户案例',true,'usercase')
  ]
  caseItems:any[] = [
    new CaseItems('../../../assets/images/case1.png','case1'),
    new CaseItems('../../../assets/images/case2.png','case2'),
    new CaseItems('../../../assets/images/case3.png','case3')
  ]
  constructor(
    private router:Router
  ) {}
  jump(name):void {
    console.log(name)
    this.router.navigate([`/${name}`])
  }
  ngOnInit() {}
}

export class ServiceItems {
  constructor(
    public imgUrl:string,
    public text:string,
    public bg:boolean,
    public routerName:string
  ){}
}

export class CaseItems {
  constructor(
    public imgUrl:string,
    public text:string
  ){}
}