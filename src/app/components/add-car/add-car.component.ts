import { CarService } from './../../services/car.service';
import { CarDto } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  addForm: FormGroup;
  car: CarDto;
  constructor(private carService:CarService
    ,private toastr: ToastrService,
    private router: Router) { 
    this.car = {
      carId:null,
      plateNo: null,
      currentColor: null,
      targetColor: null,
      action: null,
    }
  }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      plateNo: new FormControl(null, [ Validators.required]),
      currentColor: new FormControl(null, [ Validators.required]),
      targetColor: new FormControl(null, [ Validators.required]),

    });
  }
  submit() {
    this.car.plateNo = this.addForm.get('plateNo')?.value;
    this.car.currentColor = this.addForm.get('currentColor')?.value;
    this.car.targetColor = this.addForm.get('targetColor')?.value;
    if (this.addForm.invalid) {
      return;
    }else {
      this.carService.addCar(this.car).subscribe((res) => {
        this.toastr.success('Car added successfully!');
        this.router.navigateByUrl('paintJobs');
      }
        , (error) => {
          this.toastr.error("Une erreur est survenue");

        });
    }
  }
}
