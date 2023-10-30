import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AlbumListingComponent } from './components/album-listing/album-listing.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        AlbumListingComponent,
        MainBannerComponent,
        AlbumCardComponent,
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
