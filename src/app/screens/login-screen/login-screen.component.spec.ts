import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginScreenComponent } from './login-screen.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

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

  it('should update email', () => {
    const email = 'abc@example.com';
    const password = 'password123!';
    const emailControl = fixture.debugElement.query(By.css('input[name=email]'))
      .nativeElement as HTMLInputElement;

    const passwordControl = fixture.debugElement.query(
      By.css('input[name=password]')
    ).nativeElement as HTMLInputElement;

    emailControl.value = email;
    emailControl.dispatchEvent(new Event('input'));

    passwordControl.value = password;
    passwordControl.dispatchEvent(new Event('input'));

    expect(component.loginForm.get('email')?.value).toBe(email);
    expect(component.loginForm.get('password')?.value).toBe(password);
  });

  it('should update email throws error', () => {
    const email = 'abc';
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue(email);
    emailControl?.markAsTouched();

    fixture.detectChanges();

    expect(emailControl?.hasError('required')).toBeFalse();
    expect(emailControl?.hasError('email')).toBeTrue();
  });


  it('should update password throws error', () => {
    const password = 'pass';
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue(password);
    passwordControl?.markAsTouched();

    fixture.detectChanges();

    expect(passwordControl?.hasError('required')).toBeFalse();
    expect(passwordControl?.hasError('minlength')).toBeTrue();
  });


});
