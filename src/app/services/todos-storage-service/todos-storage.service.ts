import { Injectable } from '@angular/core';
import { Todo } from 'src/app/pages/todos/todos.component';

@Injectable({
  providedIn: 'any',
})
export class TodosStorageService {
  private LS_KEY = 'ng-todos';

  public getTodos(): Todo[] {
    let list = localStorage.getItem(this.LS_KEY);

    return JSON.parse(list ?? '[]');
  }

  public setTodos(todos: Todo[]): void {
    localStorage.setItem(this.LS_KEY, JSON.stringify(todos));
  }
}
