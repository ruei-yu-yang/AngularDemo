import { Todo } from 'app/models/todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoLocalService {

  constructor() { }

  getTodoList():Promise<Todo[]>{
    return new Promise((resolve,reject)=>{
      resolve([{
        id:1,
        content:'Content 1'
      },{
        id:2,
        content:'Content 2'
      }]);
    });
  }
}
