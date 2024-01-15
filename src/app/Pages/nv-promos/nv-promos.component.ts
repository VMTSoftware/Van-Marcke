import { Component } from '@angular/core';
import { ContentfulServiceService } from 'src/app/Services/contentful-service.service';

@Component({
  selector: 'app-nv-promos',
  templateUrl: './nv-promos.component.html',
  styleUrls: ['./nv-promos.component.scss']
})
export class NvPromosComponent {
  promoItem: any = {};
  promoItems: any = [];

  constructor(private nvPromoService: ContentfulServiceService) { }

  ngOnInit(): void {

    this.nvPromoService.getPromoItem('5BxaJJWiCLyesbAKwiU5dQ').then(entry => {
      console.log(entry);
      this.promoItem = entry.fields;
    });
    this.nvPromoService.getPromoItems('nvPromoItems').then(entries => {
      console.log(entries);  // Log the entries
      this.promoItems = entries.items.map(item => item.fields);
    });
    
  }
}
