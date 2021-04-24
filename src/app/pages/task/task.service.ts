import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '@core/services/api.service';
import { tap } from 'rxjs/operators';
import { PaginatorState } from '../../_metronic/shared/crud-table';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private dataSource = new BehaviorSubject<any>(null);
  public data$ = this.dataSource.asObservable();

  private paginationSource = new BehaviorSubject<PaginatorState>(null);
  public pagination$ = this.paginationSource.asObservable();

  constructor(private api: ApiService) {
  }

  fetch(type: any, page: number = 1, pageSize: number = 50) {
    let url;
    switch (type) {
      case 'share_link':
        url = `/articles?page=${page}&per_page=${pageSize}`;
        break;
      case 'join_group':
        url = `/fbgroups?page=${page}`;
        break;
    }
    return this.api.get(url).pipe(
      tap((res: any) => {
        this.dataSource.next(res.data);
        const paginator = {
          ...res.meta.pagination,
          page: res.meta.pagination.current_page,
          pageSize: res.meta.pagination.per_page,
        };
        this.paginationSource.next(paginator);
      })
    );
  }

  shareArticle(page: number) {
    return this.api.get(`/articles?page=${page}`).pipe(
      tap((res: any) => {
        this.dataSource.next(res.data);
        this.paginationSource.next(res.meta.pagination);
      })
    );
  }

  joinGroup(page: number) {
    return this.api.get(`/fbgroups?page=${page}`).pipe(
      tap((res: any) => {
        this.dataSource.next(res.data);
        this.paginationSource.next(res.meta.pagination);
      })
    );
  }
}
