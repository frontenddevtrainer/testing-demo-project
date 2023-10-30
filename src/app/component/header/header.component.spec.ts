import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should show the default header value", ()=>{
      const heading = (fixture.nativeElement as HTMLElement).querySelector('h1');
      expect(heading).toBeTruthy();
      expect(heading?.textContent).toBe("Application Header");
  })

  it('should have heading as "Music Store" in H1', ()=>{
      component.heading = "Music Store";
      fixture.detectChanges();
      const heading = (fixture.nativeElement as HTMLElement).querySelector('h1');
      expect(heading).toBeTruthy();
      expect(heading?.textContent).toBe("Music Store");
  })


});
