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
  constructor(private storageService: TodosStorageService) {}

  todos: Todo[] = [];
  newTodo: string = '';

  ngOnInit(): void {
    this.refreshTodoState();
  }

  addTodo(): void {
    this.storageService.addTodo({
      id: 1,
      text: this.newTodo,
      isCompleted: false,
    });

    this.refreshTodoState();
  }

  refreshTodoState(): void {
    this.newTodo = '';
    this.todos = this.storageService.getTodos();
  }
}
