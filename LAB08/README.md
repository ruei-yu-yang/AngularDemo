# Lab08 - 練習使用 RouterModule

1. 打開 `app.module.ts`，import Routes 和 RouterModule

    ``` typescript
    import { Routes, RouterModule } from '@angular/router';
    ```

2. 打開 `app.module.ts`，新增 Routes 設定

    ``` typescript
    const routes: Routes =[
        { path: '', redirectTo: '/todo', pathMatch: 'full' },
        { path: 'todo', component: TodoComponent },
        { path: 'todo-detail/:id', component: TodoDetailComponent },
    ];
    ```

3. 把 `RouterModule` 加入 imports

    ``` typescript
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    ```

4. 打開 `app.component.html`，加入 Router 呈現的地方

    ```
    <h1>
        TodoList
    </h1>
    <router-outlet></router-outlet>
    ```

5. 打開 `todo-detai.component.ts`，透過網址的 `id` 來讀取 Todo 資料

    ``` typescript
    import { Component, OnInit } from '@angular/core';
    import { ActivatedRoute, Params } from '@angular/router';
    import { Todo } from '../../models/todo';
    import { TodoService } from '../../services/todo.service';

    @Component({
        selector: 'app-todo-detail',
        templateUrl: './todo-detail.component.html',
        styleUrls: ['./todo-detail.component.css']
    })
    export class TodoDetailComponent implements OnInit {
        todo: Todo;

        constructor(
            private route: ActivatedRoute,
            private todoService: TodoService,
        ) { }

        ngOnInit() {
            this.route.params.forEach((params: Params) => {
                let id = params['id'];
                this.todoService.getTodo(id)
                    .then((todo)=>{          
                        this.todo = todo;
                    })
            });
        }
    }
    ```

6. 打開 `todo-detail.component.html`，增加回到列表的超連結

    ``` html
    <a [routerLink]="'/todo'">Back to list</a>
    ```    

7. 打開 `todo-list.component.html`，新增詳細頁面的連結

    ``` html
    <li *ngFor="let todo of todoList">
        <a [routerLink]="['/todo-detail', todo.id]">{{ todo.content}}</a>
    </li>
    ```
