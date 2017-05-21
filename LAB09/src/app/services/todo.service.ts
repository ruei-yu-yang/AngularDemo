import { Injectable } from '@angular/core';
import { Todo } from 'app/models/todo';
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  constructor(private http: Http) { }

  getTodo(id: number): Promise<Todo> {
    var url = `http://st-todo.herokuapp.com/todos/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Todo);
  }

  getTodoList(): Promise<Todo[]> {
    var url = 'http://st-todo.herokuapp.com/todos';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Todo[]);
  }

  createTodo(data: Todo): Promise<Response> {
    var url = 'http://st-todo.herokuapp.com/todos';
    return this.http.post(url, data)
      .toPromise();
  }
}
