import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserModel } from '../../modules/auth';
import { ApiService } from '@core/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payouts',
  templateUrl: './payouts.component.html',
  styleUrls: ['./payouts.component.scss']
})
export class PayoutsComponent implements OnInit {
  user$: Observable<UserModel>;
  data$: Observable<any>;

  submitted: boolean;
  form: FormGroup;

  constructor(private auth: AuthService,
              private apiService: ApiService,
              private fb: FormBuilder,
              public authService: AuthService) {
    this.user$ = this.auth.currentUserSubject.asObservable();

    this.form = this.fb.group({
      type: ['paypal', Validators.compose([
        Validators.required
      ])]
    });

    this.authService.paymentGet().subscribe((res: any) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.data$ = this.apiService.get('/histories');
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
}
