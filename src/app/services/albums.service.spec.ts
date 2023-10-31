import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AlbumsService } from './albums.service';
import { Album } from '../interfaces/Albums';

describe('AlbumsService', () => {
  let service: AlbumsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AlbumsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data http api', () => {
    const dummyAlbums: Album[] = [];

    service.getAlbums();
    const request = httpMock.expectOne('http://localhost:3000/albums');
    expect(request.request.method).toBe('GET');
    request.flush(dummyAlbums);

    service.albums$.subscribe((albums) => {
      expect(albums.length).toBe(0);
      expect(albums).toEqual(dummyAlbums);
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
