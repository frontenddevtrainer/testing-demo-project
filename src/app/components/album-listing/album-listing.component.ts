import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/interfaces/Albums';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-album-listing',
  templateUrl: './album-listing.component.html',
  styleUrls: ['./album-listing.component.css'],
})
export class AlbumListingComponent implements OnInit{

  constructor(private _albums: AlbumsService) {}

  @Input() heading!: string;
  albums$: Observable<Album[]> = this._albums.albums$;


  ngOnInit(): void {
    this._albums.getAlbums();
  }
}
