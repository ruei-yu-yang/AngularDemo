# Lab06 - 練習 Dependency Injection

1. 產生 `Todo` Service, 作為資料來源

    ``` bash
    ng g s services/todo
    ```

2. 打開 `todo.service.ts` ，先回傳空資料

    ``` typescript
    import { Injectable } from '@angular/core';
    import { Todo } from '../models/todo';

    @Injectable()
    export class TodoService {

        constructor() { }

        getTodoList(): Promise<Todo[]> {
            return new Promise((resolve, reject)=>{
                resolve(null);
            });
        }
    }
    ```

3. 打開 `todo.component.ts`，透過 `TodoService` 取得資料

    ``` typescript
    import { Component, OnInit } from '@angular/core';
    import { TodoService } from '../../services/todo.service';
    import { Todo } from '../../models/todo';

    @Component({
        selector: 'app-todo',
        templateUrl: './todo.component.html',
        styleUrls: ['./todo.component.css']
    })
    export class TodoComponent implements OnInit {  
        todoList: Todo[];

        constructor(private todoService: TodoService) { }

        ngOnInit(): void {
            this.todoService.getTodoList()
            .then((todoList) => {
                this.todoList = todoList;
            });
        }

        onSaved(content: string) {
            console.log(`New content is ${content}`);
        }
    }
    ```    

4. 打開 `app.module.ts`，註冊 `TodoService` 至 providers

    ```
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { HttpModule } from '@angular/http';

    import { AppComponent } from './app.component';
    import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
    import { TodoListComponent } from './shared/todo-list/todo-list.component';
    import { TodoComponent } from './pages/todo/todo.component';
    import { TodoInputComponent } from './shared/todo-input/todo-input.component';
    import { TodoService } from './services/todo.service';    

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
    providers: [
        TodoService,        
    ],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

5. 產生 `Todo-Local` Service, 作為開發時本地資料來源

    ``` bash
    ng g service services/todo-local
    ```    

6. 打開 `todo-local.service.ts` ，先回傳假資料

    ``` typescript
    import { Injectable } from '@angular/core';
    import { Todo } from '../models/todo';

    @Injectable()
    export class TodoLocalService {

        constructor() { }

        getTodoList(): Promise<Todo[]> {
            return new Promise((resolve, reject)=>{
                resolve([{
                    id: 1,
                    content: 'Content 1'
                }, {
                    id: 2,
                    content: 'Content 2'
                }]);
            });
        }
    }
    ```     

7. 打開 `app.module.ts`，註冊 `TodoLocalService` 至 providers

    ```
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { HttpModule } from '@angular/http';

    import { AppComponent } from './app.component';
    import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
    import { TodoListComponent } from './shared/todo-list/todo-list.component';
    import { TodoComponent } from './pages/todo/todo.component';
    import { TodoInputComponent } from './shared/todo-input/todo-input.component';
    import { TodoService } from './services/todo.service';
    import { TodoLocalService } from './services/todo-local.service';


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
    providers: [
        TodoService,
        { provide: TodoService, useClass: TodoLocalService }
    ],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```   
