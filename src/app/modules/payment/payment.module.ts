import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { PaymentWithdrawComponent } from './withdraw/withdraw.component';
import { PayoutsComponent } from './payouts/payouts.component';


@NgModule({
  declarations: [
    PaymentComponent,
    PaymentWithdrawComponent,
    PayoutsComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule {
}
