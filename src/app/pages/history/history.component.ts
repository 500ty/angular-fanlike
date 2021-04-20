import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserModel } from '../../modules/auth';
import { ApiService } from '@core/services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  user$: Observable<UserModel>;
  data$: Observable<any>;

  constructor(private auth: AuthService,
              private apiService: ApiService) {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  ngOnInit(): void {
    this.data$ = this.apiService.get('/histories');
  }

}
