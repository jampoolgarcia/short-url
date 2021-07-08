import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  public url_base = 'https://api-ssl.bitly.com/v4/shorten';

  constructor(private _http: HttpClient) { }

  getChortUrl(url: string): Observable<any>{
    const body = { long_url: url  };
    return this._http.post(this.url_base, body);
  }

}
