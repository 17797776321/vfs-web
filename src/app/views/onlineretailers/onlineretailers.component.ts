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
    new Electronics('../../../assets/images/banner3.png','用户体验设计','微风尚强大的设计实力支撑，帮助客户跳出千篇一律的传统商城模板式网站，提升超强用户体验的感官设计，更加有利于产品及品牌展示，从而提升消费者的整个购物体验！'),
    new Electronics('../../../assets/images/banner3.png','用户体验设计','微风尚强大的设计实力支撑，帮助客户跳出千篇一律的传统商城模板式网站，提升超强用户体验的感官设计，更加有利于产品及品牌展示，从而提升消费者的整个购物体验！'),
    new Electronics('../../../assets/images/banner3.png','用户体验设计','微风尚强大的设计实力支撑，帮助客户跳出千篇一律的传统商城模板式网站，提升超强用户体验的感官设计，更加有利于产品及品牌展示，从而提升消费者的整个购物体验！'),
    new Electronics('../../../assets/images/banner3.png','用户体验设计','微风尚强大的设计实力支撑，帮助客户跳出千篇一律的传统商城模板式网站，提升超强用户体验的感官设计，更加有利于产品及品牌展示，从而提升消费者的整个购物体验！'),
    new Electronics('../../../assets/images/banner3.png','用户体验设计','微风尚强大的设计实力支撑，帮助客户跳出千篇一律的传统商城模板式网站，提升超强用户体验的感官设计，更加有利于产品及品牌展示，从而提升消费者的整个购物体验！'),
    new Electronics('../../../assets/images/banner3.png','用户体验设计','微风尚强大的设计实力支撑，帮助客户跳出千篇一律的传统商城模板式网站，提升超强用户体验的感官设计，更加有利于产品及品牌展示，从而提升消费者的整个购物体验！'),
    new Electronics('../../../assets/images/banner3.png','用户体验设计','微风尚强大的设计实力支撑，帮助客户跳出千篇一律的传统商城模板式网站，提升超强用户体验的感官设计，更加有利于产品及品牌展示，从而提升消费者的整个购物体验！'),
    new Electronics('../../../assets/images/banner3.png','用户体验设计','微风尚强大的设计实力支撑，帮助客户跳出千篇一律的传统商城模板式网站，提升超强用户体验的感官设计，更加有利于产品及品牌展示，从而提升消费者的整个购物体验！'),
    new Electronics('../../../assets/images/banner3.png','用户体验设计','微风尚强大的设计实力支撑，帮助客户跳出千篇一律的传统商城模板式网站，提升超强用户体验的感官设计，更加有利于产品及品牌展示，从而提升消费者的整个购物体验！')
  ]
}
export class Electronics {
  constructor(
    public introImg:string,
    public title:string,
    public content:string
  ){}
}