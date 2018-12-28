import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { Router } from '@angular/router';
import { CaseService } from '../../shared/case.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  bannerUrl:string = 'http://www.vfengs.com/home/dist/vfs-web/assets/images/banner.png'
  titleText:string = '一站式服务  助力企业转型'
  desText:string = '十大行业解决方案  数百款营销活动 公众号'
  serviceItems:any[] = [
    new ServiceItems('http://www.vfengs.com/home/dist/vfs-web/assets/images/service1.png','电商平台',false,'onlineretailers'),
    new ServiceItems('http://www.vfengs.com/home/dist/vfs-web/assets/images/service2.png','微信营销',true,'wechatmarketing'),
    new ServiceItems('http://www.vfengs.com/home/dist/vfs-web/assets/images/service3.png','APP定制',true,'customized'),
    new ServiceItems('http://www.vfengs.com/home/dist/vfs-web/assets/images/service4.png','系统开发',false,'systemdev'),
    new ServiceItems('http://www.vfengs.com/home/dist/vfs-web/assets/images/service5.png','网站建设',false,'website'),
    new ServiceItems('http://www.vfengs.com/home/dist/vfs-web/assets/images/service6.png','客户案例',true,'usercase')
  ]
  caseItems:any
  constructor(
    private router:Router,
    private caseService:CaseService
  ) {}
  jump(name):void {
    console.log(name)
    this.router.navigate([`/${name}`])
  }
  ngOnInit() {
    this.caseService.getCaseData().subscribe(data=>{
      console.log(data)
      this.caseItems = data
    })
  }
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