import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserModel } from '../../../modules/auth';
import { TaskService } from '@pages/task/task.service';
import { ApiService } from '@core/services/api.service';

@Component({
  selector: 'app-share-article',
  templateUrl: './share-article.component.html',
  styleUrls: ['./share-article.component.scss']
})
export class ShareArticleComponent implements OnInit {
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
    await this.taskService.shareArticle(this.currentPage).toPromise();
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
