import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './views/layout/layout.component';
import { HomeComponent } from './views/home/home.component';
import { ContactusComponent } from './views/contactus/contactus.component';
import { OnlineretailersComponent } from './views/onlineretailers/onlineretailers.component';
import { WechatmarketingComponent } from './views/wechatmarketing/wechatmarketing.component';
import { SystemdevComponent } from './views/systemdev/systemdev.component';
import { Code404Component } from './views/code404/code404.component';
import { WebsiteComponent } from './views/website/website.component';
import { CaseComponent } from './views/case/case.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent,
        data:{ animation: 'home' }
      }
    ]
  },
  {
    path:'contactus',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component:ContactusComponent,
        data:{ animation:'contactus' }
      }
    ]
  },
  {
    path:'usercase',
    component:LayoutComponent,
    children:[
      {
        path:'',
        component: CaseComponent
      }
    ]
  },
  // 电子商务
  {
    path:'onlineretailers',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component:OnlineretailersComponent
      }
    ]
  },
  // 微信营销
  {
    path:'wechatmarketing',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component:WechatmarketingComponent
      }
    ]
  },
  // 系统开发
  {
    path:'systemdev',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component:SystemdevComponent
      }
    ]
  },
  // 网站建设
  {
    path: 'website',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component:WebsiteComponent
      }
    ]
  },
  // 404
  {
    path:'**',
    component: Code404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
