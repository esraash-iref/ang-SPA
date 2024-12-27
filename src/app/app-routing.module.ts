import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { TrainersComponent } from './trainers/trainers.component';
import { EventsComponent } from './events/events.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"home" , component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"courses", component: CoursesComponent},
  {path:"trainers", component: TrainersComponent},
  {path:"events",component: EventsComponent},
  {path:"pricing",component: PricingComponent},
  {path:"contact",component: ContactComponent},
  {path:"**" , component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
