import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gifs.intefaces';

const GIPHY_API_KEY = 'v0kNjVqj1yE3ta91hN86k8eIkdRrPJaE';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private serviceURL:string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tag: string):void{
    if(tag.length === 0) return;
    this.organicedHistory(tag);
    const param = new HttpParams().set('api_key', GIPHY_API_KEY)
                                  .set('q', tag)
                                  .set('limit',10)
                                  .set('lang','es');

    this.http.get<SearchResponse>(`${this.serviceURL}/search?`, { params: param })
      .subscribe(resp => {
        this.gifList = resp.data;
        console.log({ gifs: this.gifList });

      });
  }

  private organicedHistory(tag: string){
    tag = tag.toLowerCase().trim();
    if( this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( (oldtag) => oldtag !== tag );
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify( this._tagsHistory ));
  }

  private loadLocalStorage(): void{
    if(!localStorage.getItem('history')) return
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if(this._tagsHistory.length === 0) return
    this.searchTag(this._tagsHistory[0]);
  }
}
