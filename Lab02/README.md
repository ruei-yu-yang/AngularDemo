# Lab02 - 練習產生 Component

1. 產生 `Todo` 的資料 Interface

    ``` bash
    ng g interface models/todo
    ```

2. 指定 `Todo` 的資料欄位

    ``` typescript
    export interface Todo {
        id: number;
        content: string;
    }
    ```

3. 產生 `TodoDetail` Component，顯示 `Todo` 資料

    ``` bash
    ng g c pages/todo-detail
    ```

4. 打開 `todo-detail.component.ts`，指定 `Todo` 資料

    ``` typescript
    import { Component, OnInit } from '@angular/core';
    import { Todo } from '../../models/todo';

    @Component({
        selector: 'app-todo-detail',
        templateUrl: './todo-detail.component.html',
        styleUrls: ['./todo-detail.component.css']
    })
    export class TodoDetailComponent implements OnInit {
        todo: Todo;

        constructor() { }

        ngOnInit() {
            this.todo = {
                id: 1,
                content: "My todo item"
            };
        }
    }
    ```

5. 打開 `todo-detail.component.html`，修改 `Todo` 呈現畫面

    ``` html
    <label for="id">Id:</label>
    <p>{{ todo.id }}</p>

    <label for="content">Content:</label>
    <p>{{ todo.content }}</p>
    ```    

6. 打開 `app.component.html`，顯示 `TodoDetail` Component

    ``` html
    <h1>
        TodoList
    </h1>
    <app-todo-detail></app-todo-detail>
    ```