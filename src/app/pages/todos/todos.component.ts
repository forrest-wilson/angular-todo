import { Component, OnInit } from '@angular/core';
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
  providers: [TodosStorageService],
})
export class TodosComponent implements OnInit {
  constructor(private todosStorageService: TodosStorageService) {}

  todos: Todo[] = [];
  newTodo: string = '';

  ngOnInit(): void {
    this.todos = this.todosStorageService.getTodos();
  }

  addTodo(): void {
    this.todos.push({
      id: 1,
      text: this.newTodo,
      isCompleted: false,
    });

    this.newTodo = '';

    this.todosStorageService.setTodos(this.todos);
  }
}
