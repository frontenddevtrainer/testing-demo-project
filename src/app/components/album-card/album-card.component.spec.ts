import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumCardComponent } from './album-card.component';
import { Album } from 'src/app/interfaces/Albums';
import { CurrencyPipe } from '@angular/common';
import { DEFAULT_CURRENCY_CODE } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

const MockAlbum: Album = {
  name: 'Music Album',
  price: 12.99,
  singers: ['Singer 1', 'Singer 2', 'Singer A'],
  isReleased: true,
  thumbnail: 'https://via.placeholder.com/150',
  id: 1,
};

describe('AlbumCardComponent', () => {
  let component: AlbumCardComponent;
  let fixture: ComponentFixture<AlbumCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumCardComponent],
      imports:[RouterTestingModule],
      providers: [
        {
          provide: DEFAULT_CURRENCY_CODE,
          useValue: 'INR',
        },
      ],
    });
    fixture = TestBed.createComponent(AlbumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.album = MockAlbum;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should check album and price', () => {
    component.album = MockAlbum;
    fixture.detectChanges();

    const heading = fixture.nativeElement.querySelector(
      'h3'
    ) as HTMLHeadingElement;
    const price = fixture.nativeElement.querySelector(
      '[data-testid=price]'
    ) as HTMLParagraphElement;

    expect(heading.textContent).toContain('Music Album');
    expect(price.textContent).toContain(
      new CurrencyPipe('en', 'INR').transform(MockAlbum.price)
    );
  });

  it('should show to be release for upcoming album', () => {
    const upcomingAlbum = { ...MockAlbum, isReleased: false };
    component.album = upcomingAlbum;
    fixture.detectChanges();

    const toBeReleasedText = fixture.nativeElement.querySelector(
      '[data-testid=to-be-released]'
    );
    expect(toBeReleasedText).toBeTruthy();
  });

  it('should show add to card for released album', () => {
    component.album = MockAlbum;
    fixture.detectChanges();

    const addToCard = fixture.nativeElement.querySelector(
      '[data-testid=add-to-cart]'
    );
    expect(addToCard).toBeTruthy();
  });
});
