import { ShopPerformanceService } from './../../services/shop-performance.service';
import { ShopPerformanceDto } from './../../models/ShopPerformance';
import { Component, OnInit } from '@angular/core';
import { CommunService } from 'src/app/services/commun.service';

@Component({
  selector: 'app-shop-performance',
  templateUrl: './shop-performance.component.html',
  styleUrls: ['./shop-performance.component.css']
})
export class ShopPerformanceComponent implements OnInit {
  shopPerformance: ShopPerformanceDto
  constructor(private shopPerformanceService: ShopPerformanceService, private communService: CommunService) {
    this.shopPerformance = {
      totalCarsPainted: null,
      blueCars: null,
      redCars: null,
      greenCars: null,
    }


  }

  ngOnInit(): void {
    this.shopPerformanceService.getShopPerformace().subscribe((shopPerformance) => {
      console.log("shopPerformance")
      console.log(shopPerformance)
      this.shopPerformance = shopPerformance
    })


    this.communService.markAsCompletedSubject.subscribe((markAsCompleted) => {
      if (markAsCompleted) {
        this.shopPerformanceService.getShopPerformace().subscribe((shopPerformance) => {
          this.shopPerformance = shopPerformance
        })
      }
    })




  }

}
