import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './views/layout/layout.component';
import { HomeComponent } from './views/home/home.component';
import { ContactusComponent } from './views/contactus/contactus.component';
import { OnlineretailersComponent } from './views/onlineretailers/onlineretailers.component';

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
  {
    path:'onlineretailers',
    component: OnlineretailersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
