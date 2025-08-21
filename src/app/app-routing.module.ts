import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CalcultorComponent } from './calcultor/calcultor.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { VehcilesService } from './vehciles.service';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FlipkartComponent,} from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  // parent routing
  {path:"",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,children:[
 {path:"Home",component:HomeComponent},
   {path:"Welcome",component:WelcomeComponent},
    {path:"data-binding",component:DataBindingComponent},
    {path:"calultor",component:CalcultorComponent},
    {path:"calultor",component:RectangleComponent},
      {path:"Circle",component:CircleComponent},
       {path:"BMI",component:BMIComponent},
        {path:"vehicles",component:VehicleComponent},
        {path:"flipkart",component:FlipkartComponent},
         {path:"email",component:EmailComponent},
  ]},
   {path:"**",component:ErrorComponent},//wildcard/error routing 
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
