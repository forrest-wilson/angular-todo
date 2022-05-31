import { TestBed } from '@angular/core/testing';

import { Todo } from 'src/app/pages/todos/todos.component';
import { TodosStorageService } from './todos-storage.service';

describe('TodosStorageService', () => {
  let service: TodosStorageService;
  let mockTodos: Todo[] = [
    {
      id: 1,
      text: 'This is a todo',
      isCompleted: false,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set todos in localStorage', () => {
    service.setTodos(mockTodos);
    expect(JSON.parse(localStorage.getItem('ng-todos') ?? '')).toEqual(
      jasmine.arrayContaining(mockTodos)
    );
  });

  it('should get todos from localStorage', () => {
    localStorage.setItem('ng-todos', JSON.stringify(mockTodos));
    expect(service.getTodos()).toEqual(jasmine.arrayContaining(mockTodos));
  });
});
