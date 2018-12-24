import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CaseService {
  // 声明一个流
  caseData:Observable<any>
  baseUrl:string = 'http://192.168.1.186/public_html/m.php';
  // caseData: any[] = [
  //   new Case('../../../assets/images/case1.png','随手记','清楚理财，让你的梦想起飞！'),
  //   new Case('../../../assets/images/case2.png','苏恩定制','那份最纯美的爱意，让你享受真正的礼服艺术！'),
  //   new Case('../../../assets/images/case3.png','金斧子','用“心”投资未来！')
  // ]
  // 注入Http
  constructor(private http:HttpClient) { }
  // caseData = this.http.get(this.baseUrl+'/index/getcases')
  getCaseData() {
    return this.http.get(this.baseUrl+'/index/getcases')
  }
  // 返回当前服务的数据
  // getCaseData(): Observable<any>{
  //   return of(this.caseData)
  // }
}
export class Case {
  constructor(
    public imgUrl:string,
    public title:string,
    public text:string
  ){}
}