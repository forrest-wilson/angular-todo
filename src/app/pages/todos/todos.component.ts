import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodosStorageService } from 'src/app/services/todos-storage-service/todos-storage.service';

export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  ss: TodosStorageService;

  newTodo: string = '';

  constructor(todosStorageService: TodosStorageService) {
    this.ss = todosStorageService;
  }

  ngOnInit(): void {
    this.todos = this.ss.getTodos();
  }

  addTodo(): void {
    this.todos.push({
      id: 1,
      text: this.newTodo,
      isCompleted: false,
    });

    this.newTodo = '';

    this.ss.setTodos(this.todos);
  }
}
