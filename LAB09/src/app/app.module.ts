import { TodoLocalService } from './services/todo-local.service';
import { TodoService } from './services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { TodoListComponent } from './shared/todo-list/todo-list.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoInputComponent } from './shared/todo-input/todo-input.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  { path: 'todo-detail/:id', component: TodoDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailComponent,
    TodoListComponent,
    TodoComponent,
    TodoInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TodoService,
    // { provide: TodoService, useClass: TodoLocalService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
