import { CarDto } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommunService } from 'src/app/services/commun.service';

@Component({
  selector: 'app-paint-job-in-progress',
  templateUrl: './paint-job-in-progress.component.html',
  styleUrls: ['./paint-job-in-progress.component.css']
})
export class PaintJobInProgressComponent implements OnInit {
  listCarInProgress:CarDto[]
  constructor(private carService:CarService
    ,private toastr: ToastrService,
    private router: Router,
    private communService:CommunService) { }

  ngOnInit(): void {
    this.carService.getCarInProgress().subscribe((carInProgress)=>{
      this.listCarInProgress=carInProgress
    })
  }
  markAsCompleted(carId:number,car:CarDto,carIndex:number){
     this.carService.markAsCompleted(carId,car).subscribe((res) => {
      this.toastr.success('Car marked as completed successfully!');
      this.communService.EditMarkAsCompleted()
      this.carService.getCarInProgress().subscribe((carInProgress)=>{
        this.listCarInProgress=carInProgress
      })
    }
      , (error) => {
        this.toastr.error("Une erreur est survenue");
      });
  }
}
