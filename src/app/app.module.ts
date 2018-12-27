import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './views/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { ContactusComponent } from './views/contactus/contactus.component';
import { OnlineretailersComponent } from './views/onlineretailers/onlineretailers.component';
import { WechatmarketingComponent } from './views/wechatmarketing/wechatmarketing.component';
import { SystemdevComponent } from './views/systemdev/systemdev.component';
import { Code404Component } from './views/code404/code404.component';
import { WebsiteComponent } from './views/website/website.component';
import { CaseComponent } from './views/case/case.component';
import { CaseService } from './shared/case.service';
import { CustomizedComponent } from './views/customized/customized.component';
import { RequestService } from './utils/request.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactusComponent,
    OnlineretailersComponent,
    WechatmarketingComponent,
    SystemdevComponent,
    Code404Component,
    WebsiteComponent,
    CaseComponent,
    CustomizedComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'vfs-web'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [CaseService,RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
