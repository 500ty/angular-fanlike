import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { ShareArticleComponent } from '@pages/task/share-article/share-article.component';
import { JoinGroupComponent } from '@pages/task/join-group/join-group.component';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    children: [
      {
        path: 'share-article',
        component: ShareArticleComponent
      },
      {
        path: 'join-group',
        component: JoinGroupComponent
      },
      {
        path: '',
        redirectTo: '/task/share-article',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {
}
