import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.less']
})
export class WebsiteComponent implements OnInit {
  websiteArr:any[] = [
    new Website('http://www.vfengs.com/home/dist/vfs-web/assets/images/web1.png','网站规划','定位建议分析，网站栏目架构设计、网站规划布局结构，整套解决方案。','#F27B53'),
    new Website('http://www.vfengs.com/home/dist/vfs-web/assets/images/web2.png','网页设计','美术创意设计、专业形象界面设计、CSS+DIV前台结构布局设计、SEO优化。','#0CAED4'),
    new Website('http://www.vfengs.com/home/dist/vfs-web/assets/images/web3.png','域名、邮箱','域名、邮箱规划配置。','#75B749'),
    new Website('http://www.vfengs.com/home/dist/vfs-web/assets/images/web4.png','网站系统功能开发','系统性架构策略、程序模块功能分析设计、安全策略。','#FFB400'),
    new Website('http://www.vfengs.com/home/dist/vfs-web/assets/images/web5.png','网站运营维护方案','根据品牌宣传网站管理模式，建议网站日常信息提供、审核、发布的一整套运转方案，网站培训及知识转移计划等。','#DE567A'),
    new Website('http://www.vfengs.com/home/dist/vfs-web/assets/images/web6.png','网站营销推广计划','网站运维策略及网站价值分析、盈利情况分析等等...','#E75708'),
  ]
  constructor() { }
  
  ngOnInit() {}
}
export class Website {
  constructor(
    public imgUrl:string,
    public title:string,
    public content:string,
    public color:string
  ) {}
}