import { Component } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { AuthService, UserModel } from '../../auth';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '@core/services/api.service';
import { UserProfileService } from '../../auth/_services/user-profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.scss']
})
export class ProfileOverviewComponent {
  env = environment;
  user$: Observable<UserModel>;
  accessToken: any;

  constructor(private auth: AuthService,
              private modalService: NgbModal,
              private api: ApiService,
              private userProfileService: UserProfileService,
              public snackBar: MatSnackBar) {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  onOpenModalAddToken(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  async onSaveToken(token: string) {
    try {
      const res: any = await this.userProfileService.updateFBAccessToken(token).toPromise();
      console.log(res);
      if (res.messages) {
        this.snackBar.open(res.messages, 'Success', {
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
    this.modalService.dismissAll();
  }
}
