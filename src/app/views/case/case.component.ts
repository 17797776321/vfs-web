import { Component, OnInit } from '@angular/core';
import { CaseService } from '../../shared/case.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.less']
})
export class CaseComponent implements OnInit {

  constructor(private caseData:CaseService) { }
  myCase:any
  ngOnInit() {
    this.caseData.getCaseData().subscribe(data=>{
      console.log(data)
      this.myCase = data
    })
  }
}
export class Case {
  constructor(
    public imgUrl:string,
    public title:string,
    public text:string
  ){}
}