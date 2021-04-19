import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {InlineSVGModule} from 'ng-inline-svg';
import { NgbAlertModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import {CRUDTableModule} from '../../_metronic/shared/crud-table';
import {WidgetsModule} from '../../_metronic/partials/content/widgets/widgets.module';
import {DropdownMenusModule} from '../../_metronic/partials/content/dropdown-menus/dropdown-menus.module';
import {UserProfileComponent} from './user-profile.component';
import {ProfileOverviewComponent} from './profile-overview/profile-overview.component';
import {PersonalInformationComponent} from './personal-information/personal-information.component';
import {AccountInformationComponent} from './account-information/account-information.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {EmailSettingsComponent} from './email-settings/email-settings.component';
import {SavedCreditCardsComponent} from './saved-credit-cards/saved-credit-cards.component';
import {TaxInformationComponent} from './tax-information/tax-information.component';
import {StatementsComponent} from './statements/statements.component';
import {UserProfileRoutingModule} from './user-profile-routing.module';
import {ProfileCardComponent} from './_components/profile-card/profile-card.component';
import { SharedAppModule } from '@shared/shared.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CoreModule } from '../../_metronic/core';
import { ProfilePaymentComponent } from './payment/payment.component';
import { ProfilePaymentsInformationComponent } from './payments-information/payments-information.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    UserProfileComponent,
    ProfileOverviewComponent,
    PersonalInformationComponent,
    AccountInformationComponent,
    ChangePasswordComponent,
    EmailSettingsComponent,
    SavedCreditCardsComponent,
    TaxInformationComponent,
    StatementsComponent,
    ProfileCardComponent,
    ProfilePaymentComponent,
    ProfilePaymentsInformationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CRUDTableModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    UserProfileRoutingModule,
    DropdownMenusModule,
    NgbDropdownModule,
    NgbTooltipModule,
    WidgetsModule,
    SharedAppModule,
    ClipboardModule,
    CoreModule,
    MatRadioModule,
    MatSnackBarModule,
    NgbAlertModule
  ]
})
export class UserProfileModule {}
