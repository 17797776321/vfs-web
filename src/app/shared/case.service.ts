import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { RequestService } from '../utils/request.service';
@Injectable({
  providedIn: 'root'
})
export class CaseService {
  // 声明一个流
  caseData:Observable<any>
  baseUrl:string = 'http://www.vfengs.com/m.php';
  // 注入Http
  constructor(private requestService:RequestService) { }
  getCaseData():Observable<any> {
    return this.requestService.get('/index/getcases')
  }
}
export class Case {
  constructor(
    public imgUrl:string,
    public title:string,
    public text:string
  ){}
}