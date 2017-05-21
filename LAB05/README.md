# Lab05 - 練習多層 Component 的互動

1. 打開 `todo-input.component.ts`，新增 Import 及新增傳入參數 title 和觸發事件 onSaved

    ``` javascript
    import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

    @Component({
        selector: 'app-todo-input',
        templateUrl: './todo-input.component.html',
        styleUrls: ['./todo-input.component.css']
    })
    export class TodoInputComponent implements OnInit {
        @Input() title: string;

        @Output() onSaved: EventEmitter<string> = new EventEmitter<string>();

        content: string;

        constructor() { }

        ngOnInit() {
            this.content = undefined;
        }

        onButtonClicked() {
            this.onSaved.emit(this.content);
        }
    }
    ```

2. 打開 `todo-input.component.html`，綁定資料及綁定事件 

    ``` html
    <label for="content">{{title}}:</label>
    <input type="text" [(ngModel)]="content">
    <button type="button" (click)="onButtonClicked()">Submit</button>
    ``` 

3. 打開 `todo-list.component.ts` ，改為使用從外部傳入資料

    ``` typescript
    import { Component, OnInit, Input } from '@angular/core';
    import { Todo } from '../../models/todo';

    @Component({
        selector: 'app-todo-list',
        templateUrl: './todo-list.component.html',
        styleUrls: ['./todo-list.component.css']
    })
    export class TodoListComponent implements OnInit {
        @Input() todoList: Todo[];

        constructor() { }

        ngOnInit() {    
        }
    }
    ```    

4. 打開 `todo.component.ts` 綁定 onSaved 事件，處理收到事件時該進行的動作，以及初始化 todoList 資料

    ``` javascript
    import { Component, OnInit } from '@angular/core';
    import { Todo } from '../../models/todo';

    @Component({
        selector: 'app-todo',
        templateUrl: './todo.component.html',
        styleUrls: ['./todo.component.css']
    })
    export class TodoComponent implements OnInit {
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

        onSaved(content: string) {
            console.log(`New content is ${content}`);
        }
    }
    ```    

5. 打開 `todo.component.html` 綁定 `app-todo-input` 的 title 和 onSaved 事件，綁定 `app-todo-list` 的 todoList

    ``` html
    <app-todo-input title="Please enter new todo" (onSaved)="onSaved($event)"></app-todo-input>
    <app-todo-list [todoList]="todoList"></app-todo-list>    
    ```    

6. 開啟網頁，觀看結果
