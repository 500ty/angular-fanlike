import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserModel } from '../../../modules/auth';
import { TaskService } from '@pages/task/task.service';
import { ApiService } from '@core/services/api.service';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss']
})
export class JoinGroupComponent implements OnInit {
  currentPage = 1;
  user$: Observable<UserModel>;
  constructor(public taskService: TaskService,
              private auth: AuthService,
              private apiService: ApiService) {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    await this.taskService.joinGroup(this.currentPage).toPromise();
  }

  async saveAction(task: any) {
    try {
      const body = {
        item_type: task.type,
        item_id: task.hash_id,
        type: task.action_type,
      };
      const res = await this.apiService.post('/histories', body).toPromise();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

}
