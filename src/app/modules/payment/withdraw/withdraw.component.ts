import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService, UserModel } from '../../auth';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-payment-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class PaymentWithdrawComponent implements OnInit, OnDestroy {
  user: UserModel;
  isLoading$: Observable<boolean>;
  private firstUserState: UserModel;
  private subscriptions: any;

  constructor(private userService: AuthService) {
  }

  ngOnInit(): void {
    const sb = this.userService.currentUserSubject.asObservable().pipe(
      first(user => !!user)
    ).subscribe(user => {
      this.user = Object.assign({}, user);
      this.firstUserState = Object.assign({}, user);
    });
    this.subscriptions.push(sb);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}
