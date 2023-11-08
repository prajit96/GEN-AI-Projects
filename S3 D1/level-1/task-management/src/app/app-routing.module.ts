import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { TaskAddComponentComponent } from './task-add-component/task-add-component.component';
import { TaskDetailComponentComponent } from './task-detail-component/task-detail-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponentComponent },
  { path: 'tasks/add', component: TaskAddComponentComponent },
  { path: 'tasks/:id', component: TaskDetailComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
