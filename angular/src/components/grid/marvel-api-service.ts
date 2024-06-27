import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import CryptoJS from 'crypto-js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  private publicKey : string = '73bdc18101ae358c42521a5ee05ebe48';
  private privateKey : string = '5dc88cc3359026def92995d47c425ae699df1f73';
  private baseUrl : string = 'https://gateway.marvel.com/v1/public/';

  constructor(private http: HttpClient) { }

  private getSignedQueryString() : string {
    const timestamp : number = new Date().getTime();
    const hash = CryptoJS.MD5(timestamp + this.privateKey + this.publicKey).toString();
    return `ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`;
  }

  getCharacters(offset: number = 0, limit: number = 100, orderBy: string = 'modified'): Observable<any> {
    const signedQueryString : string = this.getSignedQueryString();
    const apiUrl = `${this.baseUrl}characters?${signedQueryString}&limit=${limit}&offset=${offset}&orderBy=${orderBy}`;
    return this.http.get(apiUrl);
  }
}
