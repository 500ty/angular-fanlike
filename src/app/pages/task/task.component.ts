import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TaskService } from '@pages/task/task.service';
import { AuthService, UserModel } from '../../modules/auth';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  currentPage = 1;

  user$: Observable<UserModel>;
  private subscriptions: Subscription[] = [];

  constructor(public taskService: TaskService,
              private auth: AuthService) {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    await this.taskService.fetch(this.currentPage).toPromise();
  }
}
