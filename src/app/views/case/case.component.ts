import { Component, OnInit } from '@angular/core';
import { CaseService } from 'src/app/shared/case.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.less']
})
export class CaseComponent implements OnInit {

  constructor(private caseData:CaseService) { }
  myCase:any[] = []
  ngOnInit() {
    this.myCase = this.caseData.caseData
  }
}
export class Case {
  constructor(
    public imgUrl:string,
    public title:string,
    public text:string
  ){}
}