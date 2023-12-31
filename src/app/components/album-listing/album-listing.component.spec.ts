import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListingComponent } from './album-listing.component';
import { AlbumCardComponent } from '../album-card/album-card.component';
import { AlbumsService } from 'src/app/services/albums.service';
import { By } from '@angular/platform-browser';
import { Album } from 'src/app/interfaces/Albums';
import { Observable, of } from 'rxjs';
import { verifyHeadingisShown } from './album-listing.component.util';
import { RouterTestingModule } from '@angular/router/testing';

class MockAlbumService {
  getAlbums(){}
  albums$: Observable<Partial<Album>[]> = of([
    {
      name: 'Album 1',
    },
    {
      name: 'Album 2',
    },
  ]);
}

describe('AlbumListingComponent', () => {
  let component: AlbumListingComponent;
  let fixture: ComponentFixture<AlbumListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumListingComponent, AlbumCardComponent],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: AlbumsService,
          useClass: MockAlbumService,
        },
      ],
    });

    fixture = TestBed.createComponent(AlbumListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    verifyHeadingisShown(component, fixture, "Top Album");
  });

  it('should have heading', () => {
    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe('');
  });

  it('should have heading as "Top Albums"', () => {
    component.heading = 'Top Albums';
    fixture.detectChanges();
    const heading = fixture.nativeElement.querySelector('h2');
    verifyHeadingisShown(component, fixture, "Top Albums");
    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe('Top Albums');
  });

  it('should show 2 card based on the service data', () => {
    verifyHeadingisShown(component, fixture, "Top Albums");
    const cards = fixture.debugElement.queryAll(
      By.directive(AlbumCardComponent)
    );
    expect(cards.length).toBe(2);
  });
});
