import { Component } from '@angular/core';
import { ContentfulServiceService } from 'src/app/Services/contentful-service.service';

@Component({
  selector: 'app-tx-promos',
  templateUrl: './tx-promos.component.html',
  styleUrls: ['./tx-promos.component.scss']
})
export class TxPromosComponent {
  promoItem: any = {};
  promoItems: any = [];

  constructor(private txPromoService: ContentfulServiceService) { }

  ngOnInit(): void {

    this.txPromoService.getPromoItem('6C8ffpYU8J8Mg2POpcsO0Z').then(entry => {
      console.log(entry);
      this.promoItem = entry.fields;
    });
    this.txPromoService.getPromoItems('txPromoItems').then(entries => {
      console.log(entries);  // Log the entries
      this.promoItems = entries.items.map(item => item.fields);
    });
    
  }
}
