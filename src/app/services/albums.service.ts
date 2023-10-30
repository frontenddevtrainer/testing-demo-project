import { Injectable } from '@angular/core';
import { Album } from '../interfaces/Albums';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private _http: HttpClient) {}
  private albums:  BehaviorSubject<Album[]> = new BehaviorSubject<Album[]>([]);
  albums$ = this.albums.asObservable();

  getAlbums(){
    this._http.get<Album[]>("http://localhost:3000/albums").subscribe((response)=>{
      this.albums.next(response);
    })
  }

  addAlbum(){

  }

  deleteAlbum(){

  }

  updateAlbum(){

  }
}

