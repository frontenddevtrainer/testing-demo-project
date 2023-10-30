import { ComponentFixture } from '@angular/core/testing';

export function profileMenuPageObject(fixture: any) {
  const menu = (fixture.nativeElement as HTMLElement).querySelector(
    '[data-testid=profile-dropdown] [role=menu]'
  ) as HTMLDivElement;

  return menu;
}

export function profileButtonPageObject(fixture: any) {
  const button = (fixture.nativeElement as HTMLElement).querySelector(
    '[data-testid=profile-dropdown] button'
  ) as HTMLButtonElement;

  return button;
}
