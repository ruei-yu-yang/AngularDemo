import { Component, OnInit } from '@angular/core';
import { Todo } from 'app/models/todo';

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
    }];
  }

}
