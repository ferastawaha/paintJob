import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarDto } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CommunService } from 'src/app/services/commun.service';

@Component({
  selector: 'app-paint-queue',
  templateUrl: './paint-queue.component.html',
  styleUrls: ['./paint-queue.component.css']
})
export class PaintQueueComponent implements OnInit {

  listCarInQueue:CarDto[]
  constructor(private carService:CarService
    ,private router: Router
    ,private communService:CommunService) { }

  ngOnInit(): void {
    this.carService.getCarInQueue().subscribe((carInQueue)=>{
      this.listCarInQueue=carInQueue
    })
    this.communService.markAsCompletedSubject.subscribe((markAsCompleted)=>{
        if(markAsCompleted){
          this.carService.getCarInQueue().subscribe((carInQueue)=>{
            this.listCarInQueue=carInQueue
          })
        }
    })

  }
}
