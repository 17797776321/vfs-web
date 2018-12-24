import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../utils/request.service';
@Injectable({
  providedIn: 'root'
})
export class CaseService {
  // 声明一个流
  caseData:Observable<any>
  baseUrl:string = 'http://192.168.1.186/public_html/m.php';
  // 注入Http
  constructor(private requestService:RequestService) { }
  getCaseData() {
    return this.requestService.get('/index/getcases')
  }
  // getCaseData() {
  //   return this.http.get(this.baseUrl+'/index/getcases')
  // }
}
export class Case {
  constructor(
    public imgUrl:string,
    public title:string,
    public text:string
  ){}
}