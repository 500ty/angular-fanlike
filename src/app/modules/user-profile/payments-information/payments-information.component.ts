import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, UserModel } from '../../auth';
import { Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Constants } from '@core/configs/constants';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payments-information',
  templateUrl: './payments-information.component.html',
  styleUrls: ['./payments-information.component.scss']
})
export class ProfilePaymentsInformationComponent implements OnInit, OnDestroy {
  submitted: boolean;

  form: FormGroup;
  formPayPal: FormGroup;
  formPayoneer: FormGroup;
  formBank: FormGroup;

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
              public authService: AuthService,
              public snackBar: MatSnackBar) {
    this.isLoading$ = this.authService.isLoadingSubject.asObservable();

    this.form = this.fb.group({
      type: ['paypal', Validators.compose([
        Validators.required
      ])]
    });
    this.formPayPal = this.fb.group({
      paypal_account_name: [null, Validators.compose([
        Validators.required
      ])],
      paypal_email: [null, Validators.compose([
        Validators.required
      ])],
      paypal_minimum_payment: [25]
    });
    this.formBank = this.fb.group({
      bank_account_name: [null, Validators.compose([
        Validators.required
      ])],
      bank_name: [null, Validators.compose([
        Validators.required
      ])],
      bank_address: [null],
      bank_account_number: [null, Validators.compose([
        Validators.required
      ])],
      bank_iban: [null],
      bank_routing_number: [null],
      bank_swift_code: [null, Validators.compose([
        Validators.required
      ])],
      bank_phone_number: [null],
      bank_minimum_payment: [100]
    });
    this.formPayoneer = this.fb.group({
      payoneer_account_name: [null, Validators.compose([
        Validators.required
      ])],
      payoneer_email: [null, Validators.compose([
        Validators.required
      ])],
      payoneer_minimum_payment: [25]
    });
  }

  ngOnInit() {
    const sb = this.authService.currentUserSubject.asObservable().pipe(
      first(user => !!user)
    ).subscribe(user => {
      console.log(user);
      this.user = Object.assign({}, user);
      this.firstUserState = Object.assign({}, user);
      this.getData();
    });
    this.subscriptions.push(sb);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  async getData() {
    const resPayment: any = await this.authService.paymentGet().toPromise();
    // console.log(resPayment);
    if (resPayment && resPayment.data && resPayment.data[0]) {
      this.form.patchValue({
        ...resPayment.data[0]
      });
      this.formPayPal.patchValue({
        ...resPayment.data[0],
        paypal_minimum_payment: resPayment.data[0].paypal_minimum_payment ? resPayment.data[0].paypal_minimum_payment : 25
      });
      this.formBank.patchValue({
        ...resPayment.data[0],
        bank_minimum_payment: resPayment.data[0].bank_minimum_payment ? resPayment.data[0].bank_minimum_payment : 100
      });
      this.formPayoneer.patchValue({
        ...resPayment.data[0],
        payoneer_minimum_payment: resPayment.data[0].payoneer_minimum_payment ? resPayment.data[0].payoneer_minimum_payment : 25
      });
    }
  }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // const { name } = this.form.value;
    console.log(this.form.value);
    // tslint:disable-next-line:max-line-length
    this.formPayPal.value.paypal_minimum_payment = this.formPayPal.value.paypal_minimum_payment ? this.formPayPal.value.paypal_minimum_payment : 25;
    this.formBank.value.bank_minimum_payment = this.formBank.value.bank_minimum_payment ? this.formBank.value.bank_minimum_payment : 100;
    // tslint:disable-next-line:max-line-length
    this.formPayoneer.value.payoneer_minimum_payment = this.formPayoneer.value.payoneer_minimum_payment ? this.formPayoneer.value.payoneer_minimum_payment : 25;

    let body;
    body = {
      ...this.formPayPal.value,
      ...this.formBank.value,
      ...this.formPayoneer.value,
      minimum_payment: this.constants.minimumPayment
    };

    try {
      const result: any = await this.authService.paymentUpdate({
        type: this.form.value.type,
        default_payment_method: this.form.value.type,
        ...body
      }).toPromise();
      // const result = null;
      if (result) {
        this.snackBar.open('Payment information has been updated successfully', 'Success', {
          duration: 2000,
        });
        // this.successMessage = 'Payment information has been updated successfully';
        // this.messageService.add({ severity: 'success', summary: '', detail: 'Update successful' });
      }
      // console.log(result);
    } catch (error) {
      console.log(error);
      this.snackBar.open(error.error.meta.messages, 'Error', {
        duration: 2000,
        panelClass: ['bg-danger']
      });
      // this.errorMessage = error.error.meta.messages;
      // const message: ErrorResponse = error;
      // if (message.error.meta.messages) {
      //   // this.errorMessage = message.error.meta.messages;
      //   this.messageService.add({ severity: 'error', summary: '', detail: message.error.meta.messages });
      // }
    }
    this.submitted = false;
  }
}
