import { Component, Input } from '@angular/core';
import { Album } from 'src/app/interfaces/Albums';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-album-listing',
  templateUrl: './album-listing.component.html',
  styleUrls: ['./album-listing.component.css'],
})
export class AlbumListingComponent {

  constructor(private _albums: AlbumsService) {}

  @Input() heading!: string;
  @Input() albums: Album[] = this._albums.albums;
}
