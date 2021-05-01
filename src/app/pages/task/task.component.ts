import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';
import { TaskService } from '@pages/task/task.service';
import { AuthService, UserModel } from '../../modules/auth';
import { PaginatorState } from '../../_metronic/shared/crud-table';
import { Constants } from '@core/configs/constants';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, AfterViewInit {
  type: 'share_link' | 'share_post' | 'join_group' | 'share_page' | 'like_post' | 'like_page' | 'welcome' | 'invite' = 'share_link';
  currentPage = 1;
  pageSize = Constants.table.rows;
  typeData = [
    {
      name: 'share_link'
    },
    {
      name: 'join_group'
    },
    {
      name: 'like_page'
    },
    {
      name: 'interaction_post'
    }
  ];
  data: any;
  data$: Observable<any[]>;
  user$: Observable<UserModel>;

  // layout
  isLoading: boolean;
  paginator: PaginatorState;
  pagination$: Observable<PaginatorState>;

  constructor(private apiService: ApiService,
              private taskService: TaskService,
              private auth: AuthService) {
    this.data$ = this.taskService.data$;
    this.pagination$ = this.taskService.pagination$;
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  ngOnInit(): void {
    this.taskService.fetch(this.type, this.currentPage, this.pageSize).subscribe();
  }

  ngAfterViewInit() {

  }


  async onSelectType(type: any) {
    if (this.type !== type) {
      this.type = type;
      this.currentPage = 1;
      await this.getData();
    }
  }

  async getData() {
    try {
      await this.taskService.fetch(this.type, this.currentPage, this.pageSize).toPromise();
    } catch (e) {

    }
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

  // pagination
  async paginate(paginator: PaginatorState) {
    console.log(paginator);
    this.currentPage = paginator.page;
    this.pageSize = paginator.pageSize;
    await this.getData();
  }
}
