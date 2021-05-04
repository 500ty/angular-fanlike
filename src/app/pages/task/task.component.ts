import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { merge, Observable, of } from 'rxjs';
import { TaskService } from '@pages/task/task.service';
import { AuthService, UserModel } from '../../modules/auth';
import { PaginatorState } from '../../_metronic/shared/crud-table';
import { Constants } from '@core/configs/constants';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileService } from '../../modules/auth/_services/user-profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, AfterViewInit {
  type: 'share_link' | 'share_post' | 'join_group' | 'share_page' | 'like_post' | 'like_page' | 'welcome' | 'invite' | 'interaction_post' = 'interaction_post';
  currentPage = 1;
  pageSize = Constants.table.rows;
  typeData = [
    // {
    //   name: 'share_link'
    // },
    {
      name: 'interaction_post'
    },
    {
      name: 'join_group'
    },
    {
      name: 'like_page'
    }
  ];
  data: any;
  user$: Observable<UserModel>;

  // layout
  isLoading: boolean;
  paginator: PaginatorState;


  // Mat table
  displayedColumns: string[] = ['name', 'receive', 'remain', 'status', 'created_at', 'actionsCol'];
  task$: Observable<any[]>;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  userTemp: UserModel;

  @ViewChild(MatPaginator) matPaginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService,
              private taskService: TaskService,
              private auth: AuthService,
              private modalService: NgbModal,
              private userProfileService: UserProfileService,
              public snackBar: MatSnackBar) {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getData();
  }

  resetPaging(): void {
    this.matPaginator.pageIndex = 0;
  }

  getData() {
    this.task$ = merge(this.sort.sortChange, this.matPaginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.taskService.fetch(
            this.type,
            this.sort.active,
            this.sort.direction,
            this.matPaginator.pageIndex,
            this.pageSize
          );
        }),
        map((data: any) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.meta.pagination.total;

          return data.data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return of([]);
        })
      );
  }


  async onSelectType(type: any) {
    if (this.type !== type) {
      this.type = type;
      this.resetPaging();
      this.getData();
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

  onOpenModalToken(content: any, user: UserModel) {
    this.modalService.open(content, {});
    this.userTemp = user;
  }

  async onSaveToken(token: string) {
    try {
      const res: any = await this.userProfileService.updateFBAccessToken(token).toPromise();
      console.log(res);
      if (res.meta.messages) {
        this.snackBar.open(res.meta.messages, 'Success', {
          duration: 2000,
        });
        const user: any = {
          ...this.userTemp,
          fb_access_token: token
        };
        this.auth.currentUserSubject.next(user);
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
