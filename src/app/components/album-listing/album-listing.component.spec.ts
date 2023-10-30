import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListingComponent } from './album-listing.component';
import { AlbumCardComponent } from '../album-card/album-card.component';

describe('AlbumListingComponent', () => {
  let component: AlbumListingComponent;
  let fixture: ComponentFixture<AlbumListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumListingComponent, AlbumCardComponent],
    });
    fixture = TestBed.createComponent(AlbumListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have heading', () => {
    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe('');
  });

  it('should have heading as "Top Albums"', () => {

    component.heading = "Top Albums"
    fixture.detectChanges();

    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe('Top Albums');
  });
});
