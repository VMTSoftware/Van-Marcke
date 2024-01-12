import { Component, OnInit } from '@angular/core';
import { AzPromoServiceService } from '../../Services/az-promo-service.service';

@Component({
  selector: 'app-az-promos',
  templateUrl: './az-promos.component.html',
  styleUrls: ['./az-promos.component.scss']
})
export class AzPromosComponent implements OnInit {
  promoItems: any;

  constructor(private azPromoService: AzPromoServiceService) { }

  ngOnInit(): void {
    this.azPromoService.getPromoItems().subscribe(data => {
      console.log(data);  // Log the data
      this.promoItems = data.items;
    });
  }
  
}