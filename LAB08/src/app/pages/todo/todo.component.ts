import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodoList()
      .then((todoList) => {
        this.todoList = todoList;
      })
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
