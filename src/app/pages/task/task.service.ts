import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  getData(sort: string = 'created_at ', order: string = 'desc', page: number = 0, pageSize: number = 10): Observable<any> {
    console.log(sort, order, page);
    // const href = 'https://api.github.com/search/issues';
    // const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

    const requestUrl = `/articles?page=${page + 1}&per_page=${pageSize}&filters[${sort}][sorting]=${order}`;
    return this.api.get<any>(requestUrl);
  }

  fetch(type: any, sort: string = 'created_at ', order: string = 'desc', page: number = 0, pageSize: number = 30) {
    let url;
    switch (type) {
      case 'share_link':
        url = `/articles?page=${page + 1}&per_page=${pageSize}&filters[${sort}][sorting]=${order}`;
        break;
      case 'join_group':
        url = `/fbgroups?page=${page + 1}&per_page=${pageSize}&filters[${sort}][sorting]=${order}`;
        break;
      case 'like_page':
        url = `/fbpages?page=${page + 1}&per_page=${pageSize}&filters[${sort}][sorting]=${order}`;
        break;
      case 'interaction_post':
        url = `/fbposts?page=${page + 1}&per_page=${pageSize}&filters[${sort}][sorting]=${order}`;
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
