import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TodoListComponent} from './components/todoList/todo-list.component';
import {FormsModule} from '@angular/forms';
import { TodoItemComponent } from './components/todoItem/todo-item.component';
import {CapitalizePipe} from '../pipes/capitalize.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    CapitalizePipe
  ],
    imports: [
        BrowserModule,
        FormsModule,
        FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
