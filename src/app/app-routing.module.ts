import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './views/layout/layout.component';
import { HomeComponent } from './views/home/home.component';
import { ContactusComponent } from './views/contactus/contactus.component';
import { OnlineretailersComponent } from './views/onlineretailers/onlineretailers.component';
import { WechatmarketingComponent } from './views/wechatmarketing/wechatmarketing.component';
import { SystemdevComponent } from './views/systemdev/systemdev.component';
import { Code404Component } from './views/code404/code404.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
    data:{ animation: 'home' }
  },
  {
    path:'contactus',
    component: ContactusComponent,
    data:{ animation:'contactus' }
  },
  // 电子商务
  {
    path:'onlineretailers',
    component: OnlineretailersComponent
  },
  // 微信营销
  {
    path:'wechatmarketing',
    component: WechatmarketingComponent
  },
  // 系统开发
  {
    path:'systemdev',
    component:SystemdevComponent
  },
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
