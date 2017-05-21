# Lab07 - 練習使用 HttpModule

1. 打開 `todo.service.ts`，使用 `http` 呼叫 api

    ``` typescript
    import { Injectable } from '@angular/core';
    import { Http, Response } from '@angular/http';
    import { Todo } from '../models/todo';

    import 'rxjs/add/operator/toPromise';

    @Injectable()
    export class TodoService {
        constructor(
            private http: Http
        ) { }

        getTodoList(): Promise<Todo[]> {    
            var url = `http://st-todo.herokuapp.com/todos`
            return this.http.get(url)
                .toPromise()
                .then(response => response.json() as Todo[]);
        }
    }
    ```

2. 打開 `app.module.ts`，移除 `TodoLocalService` 的註冊

    ``` typescript
    providers: [
        TodoService,
        // { provide: TodoService, useClass: TodoLocalService }
    ],
    ```

3. 打開 `todo.service.ts`，新增 Create 方法

    ``` typescript
    createTodo(data: Todo): Promise<Response> {
        var url = `http://st-todo.herokuapp.com/todos`
        return this.http.post(url, data)
            .toPromise();
    }
    ```

4. 打開 `todo.component.ts`，增加新增 todo 功能

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
            let todo: Todo = {
                id: undefined,
                content: content
            };

            this.todoService.createTodo(todo)
            .then(() => {
                location.reload();
            })
        }
    }
    ```
