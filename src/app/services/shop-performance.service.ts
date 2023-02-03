import { ShopPerformanceDto } from './../models/ShopPerformance';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopPerformanceService {
  readonly ENDPOINT_SHOP_PERFORMANCE = "/api/car/shopPerformance"
  public backUri: string = environment.back_url;
  constructor(private http: HttpClient) { }
  getShopPerformace(){
    return this.http.get<ShopPerformanceDto>(this.backUri + this.ENDPOINT_SHOP_PERFORMANCE);
  }
}
