import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {
  profileButtonPageObject,
  profileMenuPageObject,
} from 'src/app/testutls/page-objects/header';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the default header value', () => {
    const heading = (fixture.nativeElement as HTMLElement).querySelector('h1');
    expect(heading).toBeTruthy();
    expect(heading?.textContent).toBe('Application Header');
  });

  it('should have heading as "Music Store" in H1', () => {
    component.heading = 'Music Store';
    fixture.detectChanges();
    const heading = (fixture.nativeElement as HTMLElement).querySelector('h1');
    expect(heading).toBeTruthy();
    expect(heading?.textContent).toBe('Music Store');
  });

  it('should show down arrow for profile menu when not open', () => {
    const arrow = (fixture.nativeElement as HTMLElement).querySelector(
      '[data-testid=menu-arrow]'
    );
    expect(arrow).toBeTruthy();
    expect(arrow?.textContent).toContain('arrow_drop_down');
  });

  it('should show up arrow for profile menu when open', () => {
    const button = profileButtonPageObject(fixture);

    expect(button).toBeTruthy();
    button.click();
    fixture.detectChanges();

    const menu = profileMenuPageObject(fixture);

    expect(menu).toBeTruthy();

    const arrow = (fixture.nativeElement as HTMLElement).querySelector(
      '[data-testid=menu-arrow]'
    );
    expect(arrow).toBeTruthy();
    expect(arrow?.textContent).toContain('arrow_drop_up');
  });

  it('should not show link list in dropdown', () => {
    const button = profileButtonPageObject(fixture);
    expect(button).toBeTruthy();

    button.click();
    fixture.detectChanges();

    const menu = profileMenuPageObject(fixture);
    const links = menu.querySelectorAll('a');

    expect(links.length).toBe(0);
  });

  it('should show link list in dropdown', () => {
    component.links = [{ link: '/demourl', title: 'Demo Title' }];

    fixture.detectChanges();

    const button = profileButtonPageObject(fixture);
    expect(button).toBeTruthy();

    button.click();
    fixture.detectChanges();

    const menu = profileMenuPageObject(fixture);
    const links = menu.querySelectorAll('a');
    const firstLink = links[0];

    expect(links.length).toBe(1);
    expect(firstLink.textContent).toContain("Demo Title");
    expect(firstLink.getAttribute("href")).toBe("/demourl");
  });
});
