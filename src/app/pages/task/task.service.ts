import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '@core/services/api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private dataSource = new BehaviorSubject<any>(null);
  public data$ = this.dataSource.asObservable();

  private paginationSource = new BehaviorSubject<any>(null);
  public pagination$ = this.paginationSource.asObservable();

  constructor(private api: ApiService) {
  }

  fetch(page: number) {
    return this.api.get(`/articles?page=${page}`).pipe(
      tap((res: any) => {
        this.dataSource.next(res.data);
        this.paginationSource.next(res.meta.pagination);
      })
    );
  }
}
