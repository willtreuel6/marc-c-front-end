import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {
    path:"",
    component : HomeComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"services",
    component: ServicesComponent
  },
  {
    path:"service-details/:id",
    component: ServiceDetailsComponent
  },
  {
    path:"about",
    component: AboutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
