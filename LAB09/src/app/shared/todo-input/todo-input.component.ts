import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
