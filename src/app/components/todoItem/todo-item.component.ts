import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Todo} from '../../../types/Todo';
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnChanges{

  @Input() todo: Todo | undefined;
  @Output() delete: EventEmitter<any> = new EventEmitter

  editValue: string = ''
  active: boolean = false;
  check = faCheck
  faTimes = faTimes
  constructor() { }

  remove(todo: any) {
    this.delete.emit(todo.id)
  }

  changeActive() {
    this.active = !this.active
    console.log(this.active)
  }

  ngOnChanges(element: SimpleChanges) {
  }

  onChange() {
    if(this.todo?.name !== undefined) {
      this.todo.name = this.editValue
    }
    this.active = !this.active
  }

}
