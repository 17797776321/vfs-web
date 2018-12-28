import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customized',
  templateUrl: './customized.component.html',
  styleUrls: ['./customized.component.less']
})
export class CustomizedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  customizedData:any[] = [
    new CustomizedData('http://www.vfengs.com/home/dist/vfs-web/assets/images/cus1.png','了解需求分析企业产品市场情况，开展市场调研，编制市场可行性报告。'),
    new CustomizedData('http://www.vfengs.com/home/dist/vfs-web/assets/images/cus2.png','根据市场调研情况，与企业沟通，策划APP开发及运营方案'),
    new CustomizedData('http://www.vfengs.com/home/dist/vfs-web/assets/images/cus3.png','设计符合企业文化，产品特色，精致美观，交互性良好的APP界面。'),
    new CustomizedData('http://www.vfengs.com/home/dist/vfs-web/assets/images/cus4.png','提升用户体验、评估工作量及时间、验收、修改及完善。'),
    new CustomizedData('http://www.vfengs.com/home/dist/vfs-web/assets/images/cus5.png','APP开发完成后，加入UI元素，根据测试用户的反馈。'),
    new CustomizedData('http://www.vfengs.com/home/dist/vfs-web/assets/images/cus6.png','提升用户体验、评估工作量及时间、验收、修改及完善。'),
  ]
}
export class CustomizedData {
  constructor(
    public imgUrl:string,
    public text:string
  ) {}
}