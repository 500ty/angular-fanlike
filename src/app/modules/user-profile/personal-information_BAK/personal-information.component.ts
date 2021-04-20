import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthService, UserModel } from '../../auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  user: UserModel;
  firstUserState: UserModel;
  subscriptions: Subscription[] = [];
  // avatarPic = 'none';
  isLoading$: Observable<boolean>;
  submitted: boolean;

  constructor(private userService: AuthService,
              private fb: FormBuilder,
              public snackBar: MatSnackBar,
              private http: HttpClient,
              private userProfileService: UserProfileService) {
    this.isLoading$ = this.userService.isLoadingSubject.asObservable();
  }

  ngOnInit(): void {
    const sb = this.userService.currentUserSubject.asObservable().pipe(
      first(user => !!user)
    ).subscribe(user => {
      console.log(user);
      this.user = Object.assign({}, user);
      this.firstUserState = Object.assign({}, user);
      this.loadForm();
    });
    this.subscriptions.push(sb);
  }

  ngOnDestroy() {
    // this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  loadForm() {
    this.formGroup = this.fb.group({
      // pic: [this.user.pic],
      first_name: [this.user.first_name, Validators.required],
      last_name: [this.user.last_name, Validators.required],
      // companyName: [this.user.companyName, Validators.required],
      phone: [this.user.phone, Validators.required],
      email: [this.user.email, Validators.compose([Validators.required, Validators.email])],
      // website: [this.user.website, Validators.required]
    });
  }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return;
    }
    const {first_name, last_name, phone, email} = this.formGroup.value;
    const body = {
      first_name,
      last_name,
      name: first_name + ' ' + last_name,
      phone,
      email,
    };
    const userRes = await this.userProfileService.updateProfile(body).toPromise();
    console.log('onSubmit - userRes:', userRes);
  }


  async save() {

    this.formGroup.markAllAsTouched();
    if (!this.formGroup.valid) {
      return;
    }

    const formValues = this.formGroup.value;
    this.user = Object.assign(this.user, formValues);

    // Do request to your server for user update, we just imitate user update there
    // this.userService.isLoadingSubject.next(true);


    const body = {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      name: this.user.first_name + ' ' + this.user.last_name,
      phone: this.user.phone,
      email: this.user.email,
    };
    console.log('save', body);
    this.userService.updateProfile(body).subscribe((res) => {
      console.log('this.userService.updateProfile:', res);
    });
    return;

    const authData = JSON.parse(
      localStorage.getItem(`${environment.appVersion}-${environment.USERDATA_KEY}`)
    );

    if (authData) {
      const token = authData.authToken;
      // headersConfig['Authorization'] = `Token ${token}`;
      const headersConfig: any = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      };
      headersConfig.Authorization = `Bearer ${token}`;
      const rest = await this.http.post('https://api.fanlike.net/v1/users/profile', body, {headers: headersConfig}).toPromise();
      console.log(rest);
    }
    return;

    try {
      const authData = JSON.parse(
        localStorage.getItem(`${environment.appVersion}-${environment.USERDATA_KEY}`)
      );

      if (authData) {
        const token = authData.authToken;
        // headersConfig['Authorization'] = `Token ${token}`;
        const headersConfig: any = {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        };
        headersConfig.Authorization = `Bearer ${token}`;
        const rest = await this.http.post('https://api.fanlike.net/v1/users/profile', body, {headers: headersConfig});
        console.log(rest);
      }

      const userRes: any = await this.userService.updateProfile(body).toPromise();
      console.log(userRes);
      this.userService.currentUserSubject.next(Object.assign({}, this.user));
      this.snackBar.open('Personal information has been updated successfully', 'Success', {
        duration: 2000,
      });
    } catch (e) {
      console.log(e);
      this.snackBar.open(e.body.error, 'Error', {
        duration: 2000,
        panelClass: ['bg-danger']
      });
    }
    // this.userService.isLoadingSubject.next(false);
  }

  cancel() {
    this.user = Object.assign({}, this.firstUserState);
    this.loadForm();
  }

  // getPic() {
  //   if (!this.user.pic) {
  //     return 'none';
  //   }
  //
  //   return `url('${this.user.pic}')`;
  // }
  //
  // deletePic() {
  //   this.user.pic = '';
  // }

  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }
}
