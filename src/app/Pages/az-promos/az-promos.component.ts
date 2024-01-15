import { Component, OnInit } from '@angular/core';
import { AzPromoServiceService } from '../../Services/az-promo-service.service';
import { ContentfulServiceService } from 'src/app/Services/contentful-service.service';

@Component({
  selector: 'app-az-promos',
  templateUrl: './az-promos.component.html',
  styleUrls: ['./az-promos.component.scss']
})
export class AzPromosComponent implements OnInit {
  promoItem: any = {};
  promoItems: any = [];

  constructor(private azPromoService: ContentfulServiceService) { }

  ngOnInit(): void {

    this.azPromoService.getPromoItem('4bUzhyWD6BR2lk19FwOV5h').then(entry => {
      console.log(entry);
      this.promoItem = entry.fields;
    });
    this.azPromoService.getPromoItems('azPromoItems').then(entries => {
      console.log(entries);  // Log the entries
      this.promoItems = entries.items.map(item => item.fields);
    });
    
  }
}