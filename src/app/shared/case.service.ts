import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  caseData: any[] = [
    new Case('../../../assets/images/case1.png','随手记','清楚理财，让你的梦想起飞！'),
    new Case('../../../assets/images/case2.png','苏恩定制','那份最纯美的爱意，让你享受真正的礼服艺术！'),
    new Case('../../../assets/images/case3.png','金斧子','用“心”投资未来！')
  ]
  constructor() { }
  // 返回当前服务的数据
}
export class Case {
  constructor(
    public imgUrl:string,
    public title:string,
    public text:string
  ){}
}