import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzPromoServiceService {
  private contentfulUrl = 'https://cdn.contentful.com/spaces/9i6sip6z6ojh/environments/master/entries/4bUzhyWD6BR2lk19FwOV5h?access_token=Ab_ryj5nXeK4sDm7vFon8NLLs5XxyxoeGgcysvZ5cLs';

  constructor(private http: HttpClient) { }

  getPromoItems(): Observable<any> {
    return this.http.get<any>(this.contentfulUrl);
  }
}