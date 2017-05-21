# Lab03 - 練習輸入元件和列表

1. 產生 `TodoList` Component，顯示 `Todo` 清單

    ``` bash
    ng g component shared/todo-list
    ```

2. 打開 `todo-list.component.ts`，指定 `TodoList` 資料

    ``` typescript
    import { Component, OnInit } from '@angular/core';
    import { Todo } from '../../models/todo';

    @Component({
        selector: 'app-todo-list',
        templateUrl: './todo-list.component.html',
        styleUrls: ['./todo-list.component.css']
    })
    export class TodoListComponent implements OnInit {
        todoList: Todo[];

        constructor() { }

        ngOnInit() {
            this.todoList = [{
                id: 1,
                content: 'Content 1'
            }, {
                id: 2,
                content: 'Content 2'
            }]
        }

    }
    ```   

3. 打開 `todo-list.component.html`，修改 `TodoList` 呈現畫面 

    ``` html
    <ul>
        <li>Todo 1</li>
        <li>Todo 2</li>
        <li>Todo 3</li>
    </ul>
    ```

4. 產生 `Todo` 頁面，作為 `Todo` 的主畫面 

    ``` bash
    ng g component pages/todo
    ```     

5. 打開 `todo.component.html`，修改 `Todo` 呈現畫面  

    ``` html
    <app-todo-list></app-todo-list>
    ```

6. 打開 `app.component.html`，修改起始頁面

    ```
    <h1>
        TodoList
    </h1>
    <app-todo></app-todo>
    ```

7. 產生 `TodoInput` Component，提供輸入 `Todo` 資料

    ``` bash
    ng g component shared/todo-input
    ```

8. 打開 `todo-input.component.ts`，指定資料欄位

    ``` typescript
    import { Component, OnInit } from '@angular/core';

    @Component({
        selector: 'app-todo-input',
        templateUrl: './todo-input.component.html',
        styleUrls: ['./todo-input.component.css']
    })
    export class TodoInputComponent implements OnInit {
        content: string;

        constructor() { }

        ngOnInit() {
            this.content = undefined;
        }
    }
    ```

9. 打開 `todo-input.component.html`，修改資料輸入畫面 

    ``` html
    <label for="content">Content:</label>
    <input type="text">
    <button type="button">Submit</button>
    ```


10. 打開 `todo.component.html`，修改 `Todo` 呈現畫面  

    ``` html
    <app-todo-input></app-todo-input>
    <app-todo-list></app-todo-list>
    ```

11. 開啟網頁，觀看結果
