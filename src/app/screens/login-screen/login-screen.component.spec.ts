import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginScreenComponent } from './login-screen.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('LoginScreenComponent', () => {
  let component: LoginScreenComponent;
  let fixture: ComponentFixture<LoginScreenComponent>;
  let formBuilder: FormBuilder = new FormBuilder();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginScreenComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: FormBuilder,
          useValue: formBuilder,
        },
      ],
    });
    fixture = TestBed.createComponent(LoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have controls for email and password', () => {
    expect(component.loginForm.get('email')).toBeDefined();
    expect(component.loginForm.get('password')).toBeDefined();
  });

  it('should submit the form', () => {
    spyOn(component, 'loginUser');

    let formElementButton = fixture.nativeElement.querySelector(
      '[type=submit]'
    ) as HTMLButtonElement;
    formElementButton.click();
    fixture.detectChanges();

    expect(component.loginUser).toHaveBeenCalled();
  });
});
