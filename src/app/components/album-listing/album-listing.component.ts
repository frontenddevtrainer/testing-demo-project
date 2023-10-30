import { Component, Input } from '@angular/core';
import { Album } from 'src/app/interfaces/Albums';

const mockAlbums: Album[] = [
  {
    name: 'Album 1',
    price: 15.99,
    singers: ['Singer A', 'Singer B'],
    thumbnail: 'https://via.placeholder.com/150',
    isReleased: true,
  },
  {
    name: 'Album 2',
    price: 12.99,
    singers: ['Singer C'],
    thumbnail: 'https://via.placeholder.com/150',
    isReleased: true,
  },
  {
    name: 'Album 3',
    price: 19.99,
    singers: ['Singer D', 'Singer E', 'Singer F'],
    thumbnail: 'https://via.placeholder.com/150',
    isReleased: false,
  },
  {
    name: 'Album 4',
    price: 9.99,
    singers: ['Singer G'],
    thumbnail: 'https://via.placeholder.com/150',
    isReleased: true,
  },
];

@Component({
  selector: 'app-album-listing',
  templateUrl: './album-listing.component.html',
  styleUrls: ['./album-listing.component.css'],
})
export class AlbumListingComponent {
  @Input() heading!: string;
  @Input() albums: Album[] = mockAlbums;
}
