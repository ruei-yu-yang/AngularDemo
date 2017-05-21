import { TodoService } from '../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'app/models/todo';
import { ActivatedRoute, Params } from "@angular/router";

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
    this.route.params.forEach((param: Params) => {
      let id = param['id'];
      this.todoService.getTodo(id)
        .then((todo) => {
          this.todo = todo;
        });
    });
  }

}
