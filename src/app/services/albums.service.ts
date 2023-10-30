import { Injectable } from '@angular/core';
import { Album } from '../interfaces/Albums';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor() {}

  albums: Album[] = [
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
}
