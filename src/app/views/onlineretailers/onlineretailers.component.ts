import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onlineretailers',
  templateUrl: './onlineretailers.component.html',
  styleUrls: ['./onlineretailers.component.less']
})
export class OnlineretailersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  electronics:any[] = [
    new Electronics('http://www.vfengs.com/home/dist/vfs-web/assets/images/ds1.png','用户体验设计','微风尚强大的设计实力支撑，帮助客户跳出千篇一律的传统商城模板式网站，提升超强用户体验的感官设计，更加有利于产品及品牌展示，从而提升消费者的整个购物体验！'),
    new Electronics('http://www.vfengs.com/home/dist/vfs-web/assets/images/ds2.png','丰富的商品介绍','促销价格、促销形式、商品评分、服务标签、商品属性、图片选择，您完全可以自定义商品购买页面的介绍内容，消费者更了解您的商品，就更愿意购买。'),
    new Electronics('http://www.vfengs.com/home/dist/vfs-web/assets/images/ds3.png','SEO优化','想要提升商城在搜索引擎的排名，让客户主动上门？没问题！商城内置标题描述关键词修改、网站地图、友链交换等多项SEO功能，助您快速提升关键词排名！'),
    new Electronics('http://www.vfengs.com/home/dist/vfs-web/assets/images/ds4.png','促销管理','想要快速销售特定商品，却担心没有适用的促销功能？别担心！商城内置多种促销功能，直降、满减、团购、组合购买，让您轻松开展各种促销活动！'),
    new Electronics('http://www.vfengs.com/home/dist/vfs-web/assets/images/ds5.png','在线支付','商城收款离不开网上银行的在线支付功能，商城内置所有银行的支付方式（包括支付宝、易宝等），您只需在我们的协助下进行简单的配置，就可以在线收款了'),
    new Electronics('http://www.vfengs.com/home/dist/vfs-web/assets/images/ds6.png','会员管理','发展并积累真正属于您自己商城的忠实会员，掌握会员的手机号、邮件、地址等详细信息，并针对特定的会员群体做精准的短信和邮件营销'),
    new Electronics('http://www.vfengs.com/home/dist/vfs-web/assets/images/ds7.png','报表统计','数据分析是一个网上商城成功的基石，商城内置了访客统计、银行收款、商品销售等多方面的报表，让您清晰掌握商城的运营情况，营销推广更高效！'),
    new Electronics('http://www.vfengs.com/home/dist/vfs-web/assets/images/ds8.png','购物卡折扣卡','老客户是商城持续发展的重中之重，而维护老客户的秘诀是什么？商城独有的购物卡、折扣卡功能，可以针对特定用户单独发放，是您维护老客户的利器！'),
    new Electronics('http://www.vfengs.com/home/dist/vfs-web/assets/images/ds9.png','商品订单管理','商品和订单的管理是一个商城运营的基础，商品分类、标签、属性、库存、图片管理，订单明细、发货、打印、退换货、投诉处理等功能，让您处理业务得心应手！')
  ]
}
export class Electronics {
  constructor(
    public introImg:string,
    public title:string,
    public content:string
  ){}
}