import { Component, OnInit } from '@angular/core';
import { Todo } from 'app/models/todo';

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
    }];
  }

  onSaved(content: string) {
    console.log(`New content is ${content}`);
  }
}
