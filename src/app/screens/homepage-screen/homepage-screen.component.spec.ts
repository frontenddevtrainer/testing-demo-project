import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageScreenComponent } from './homepage-screen.component';
import { MainBannerComponent } from 'src/app/components/main-banner/main-banner.component';
import { AlbumListingComponent } from 'src/app/components/album-listing/album-listing.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomepageScreenComponent', () => {
  let component: HomepageScreenComponent;
  let fixture: ComponentFixture<HomepageScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomepageScreenComponent,
        MainBannerComponent,
        AlbumListingComponent,
      ],
      imports: [ HttpClientTestingModule ]
    });
    fixture = TestBed.createComponent(HomepageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
