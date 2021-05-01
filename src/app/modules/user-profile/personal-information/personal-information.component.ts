import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, UserModel } from '../../auth';
import { Observable, Subscription } from 'rxjs';
import { Constants } from '@core/configs/constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserProfileService } from '../../auth/_services/user-profile.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit, OnDestroy {
  submitted: boolean;

  form: FormGroup;

  validationMessages = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 3 characters.',
      maxlength: 'Name can\'t be longer than 200 characters.'
    },
    minimum_payment: {
      required: 'Minimum payment amounts is required.',
      number: 'Invalid amount.'
    },
    phone: {
      phoneFormat: 'Invalid phone number.'
    }
  };

  user: UserModel;
  firstUserState: UserModel;
  subscriptions: Subscription[] = [];
  // avatarPic = 'none';
  isLoading$: Observable<boolean>;

  constants = Constants;

  constructor(private fb: FormBuilder,
              public snackBar: MatSnackBar,
              private userProfileService: UserProfileService,
              private authService: AuthService) {
    this.isLoading$ = this.authService.isLoadingSubject.asObservable();

    this.form = this.fb.group({
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    const sb = this.authService.currentUserSubject.asObservable().pipe(
      // first(user => !!user)
    ).subscribe(user => {
      console.log(user);
      this.user = Object.assign({}, user);
      this.firstUserState = Object.assign({}, user);
      this.form.patchValue(user);
    });
    this.subscriptions.push(sb);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // const { name } = this.form.value;
    console.log(this.form.value);

    const {first_name, last_name, phone, email} = this.form.value;
    const body = {
      first_name,
      last_name,
      name: first_name + ' ' + last_name,
      phone,
      email,
    };
    console.log(body);

    try {
      const result: any = await this.userProfileService.updateProfile(body).toPromise();
      // const result = null;
      if (result) {
        this.authService.currentUserSubject.next(Object.assign({}, result.data));
        this.snackBar.open('Personal information has been updated successfully', 'Success', {
          duration: 2000,
        });
      }
      console.log(result);
    } catch (error) {
      console.log(error);
      this.snackBar.open(error.error.meta.messages, 'Error', {
        duration: 2000,
        panelClass: ['bg-danger']
      });
    }
    this.submitted = false;
  }

  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }
}
