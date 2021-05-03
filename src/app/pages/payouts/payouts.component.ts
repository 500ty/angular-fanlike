import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserModel } from '../../modules/auth';
import { ApiService } from '@core/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-payouts',
  templateUrl: './payouts.component.html',
  styleUrls: ['./payouts.component.scss']
})
export class PayoutsComponent implements OnInit {
  user$: Observable<UserModel>;
  data$: Observable<any>;
  paymentInfo$: Observable<any>;

  submitted: boolean;
  form: FormGroup;

  alert: {
    type: string;
    message: string
  };

  constructor(private auth: AuthService,
              private apiService: ApiService,
              private fb: FormBuilder,
              public snackBar: MatSnackBar) {
    this.user$ = this.auth.currentUserSubject.asObservable();

    this.form = this.fb.group({
      type: ['paypal', Validators.compose([
        Validators.required
      ])]
    });

    this.paymentInfo$ = this.auth.paymentGet().pipe(
      map((res: any) => res.data[0]),
      tap(res => {
        this.form.patchValue({
          type: res.type || 'paypal'
        });
      })
    );
  }

  ngOnInit(): void {
    this.data$ = this.apiService.get('/transactions');
  }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // const { name } = this.form.value;
    console.log(this.form.value);

    this.submitted = false;
  }

  async onRequest(user: UserModel) {
    this.alert = null;
    try {
      const res: any = await this.apiService.post('/transactions', {
        user_id: user.id
      }).toPromise();
      if (res.data) {
        this.snackBar.open('We have received your request', 'Success', {
          duration: 2000,
        });
      }

    } catch (error) {
      console.log(error);
      this.snackBar.open(error.error.meta.messages, 'Error', {
        duration: 2000,
        panelClass: ['bg-danger']
      });
    }

  }
}
