import { Injectable } from '@angular/core';
import { createClient, Entry, EntryCollection } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulServiceService {
  private client = createClient({
    space: '9i6sip6z6ojh',
    accessToken: 'Ab_ryj5nXeK4sDm7vFon8NLLs5XxyxoeGgcysvZ5cLs'
  });

  constructor() { }

  getPromoItem(entryId: string): Promise<Entry<any>> {
    return this.client.getEntry(entryId);
  }
  getPromoItems(contentTypeId: string): Promise<EntryCollection<any>> {
    return this.client.getEntries({ content_type: contentTypeId });
  }
}
