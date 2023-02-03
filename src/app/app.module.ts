import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaintJobsComponent } from './components/paint-jobs/paint-jobs.component';
import { ShopPerformanceComponent } from './components/shop-performance/shop-performance.component';
import { PaintJobInProgressComponent } from './components/paint-job-in-progress/paint-job-in-progress.component';
import { PaintQueueComponent } from './components/paint-queue/paint-queue.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    PaintJobsComponent,
    ShopPerformanceComponent,
    PaintJobInProgressComponent,
    PaintQueueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
