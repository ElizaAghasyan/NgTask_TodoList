import {Component} from '@angular/core';
import {Todo} from '../../../types/Todo';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[];
  nameValue = '';

  constructor() {
    this.todos = [
      {
        name: 'First Todo',
        date: new Date(),
        id: Guid.create()
      },
      {
        name: 'Second Todo',
        date: new Date(),
        id: Guid.create()
      }
    ];
  }

  addItem() {
    this.todos.unshift({
      name: this.nameValue,
      date: new Date(),
      id: Guid.create()
    })
    this.nameValue = ''
  }

  deleteTodo(id: any) {
    this.todos = this.todos.filter((todo,i) => i !== id);
  }
}
