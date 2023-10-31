export function verifyHeadingisShown(component: any, fixture: any, headingtext: string) {
  component.heading = headingtext;
  fixture.detectChanges();
  const heading = fixture.nativeElement.querySelector('h2');
  expect(heading).toBeTruthy();
  expect(heading.textContent).toBe(headingtext);
}
