import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { TodoListComponent } from './shared/todo-list/todo-list.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoInputComponent } from './shared/todo-input/todo-input.component';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
