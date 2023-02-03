import { AddCarComponent } from './components/add-car/add-car.component';
import { PaintJobsComponent } from './components/paint-jobs/paint-jobs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
 {path :'', redirectTo:'addCar', pathMatch:'full',},
{ path: 'paintJobs', component: PaintJobsComponent },
{ path: 'addCar', component: AddCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
