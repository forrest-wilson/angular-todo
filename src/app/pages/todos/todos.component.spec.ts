import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load a list from localStorage and assign to class property', () => {
    expect(Array.isArray(component.todos)).toBeTrue();
  });

  it('should have root list element', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.list')).toBeTruthy();
  });

  it('should render todo items to the DOM', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.list .item')).toBeTruthy();
  });
});
