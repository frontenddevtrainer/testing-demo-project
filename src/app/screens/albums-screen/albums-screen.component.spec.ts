import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsScreenComponent } from './albums-screen.component';

describe('AlbumsScreenComponent', () => {
  let component: AlbumsScreenComponent;
  let fixture: ComponentFixture<AlbumsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsScreenComponent]
    });
    fixture = TestBed.createComponent(AlbumsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
