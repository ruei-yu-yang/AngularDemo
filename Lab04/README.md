# Lab04 - 練習綁定資料

1. 打開 `todo-list.component.html`，修改 `TodoList` 呈現畫面 

    ``` html
    <ul>
        <li *ngFor="let todo of todoList">{{ todo.content }}</li>
    </ul>
    ```

1. 打開 `todo-input.component.html`，修改資料輸入畫面 

    ``` html
    <label for="content">Content:</label>
    <input type="text" [(ngModel)]="content">
    <button type="button">Submit</button>
    ```

1. 開啟網頁，觀看結果
