import { CarDto } from './../models/car';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  readonly ENDPOINT_ADD_CAR = "/api/car"
  readonly ENDPOINT_CAR_IN_PROGRESS = "/api/car/carInProgress"
  readonly ENDPOINT_CAR_IN_QUEUE = "/api/car/carInQueue"
  readonly ENDPOINT_MARK_AS_COMPLETED = "/api/car/markAsCompleted/"
  public backUri: string = environment.back_url;
  constructor(private http: HttpClient) { }
  public addCar(car: CarDto) {
    return this.http.post(this.backUri + this.ENDPOINT_ADD_CAR, car);
  }
  public getCarInProgress(){
    return this .http.get<CarDto[]>(this.backUri + this.ENDPOINT_CAR_IN_PROGRESS)
  }
  public getCarInQueue(){
    return this .http.get<CarDto[]>(this.backUri + this.ENDPOINT_CAR_IN_QUEUE)
  }
  public markAsCompleted(carId:number,car:CarDto){
    return this.http.post(this.backUri + this.ENDPOINT_MARK_AS_COMPLETED+carId,car)
  }
}
