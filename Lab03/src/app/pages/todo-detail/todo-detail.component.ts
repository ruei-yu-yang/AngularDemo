import { Component, OnInit } from '@angular/core';
import { Todo } from 'app/models/todo';

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
      content: 'My todo item'
    };
  }

}
