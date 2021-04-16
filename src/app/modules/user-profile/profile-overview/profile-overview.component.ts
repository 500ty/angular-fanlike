import { Component } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { AuthService, UserModel } from '../../auth';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.scss']
})
export class ProfileOverviewComponent {
  env = environment;
  user$: Observable<UserModel>;
  constructor(private auth: AuthService) {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }
}
