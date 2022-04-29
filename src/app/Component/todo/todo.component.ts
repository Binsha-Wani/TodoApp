import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: any = [];
  todoTitle: any;
  idForTodo: any;
  filters: any;
  constructor() {}

  ngOnInit(): void {
    this.filters = 'all';
    this.idForTodo = 5;
    this.todoTitle = '';
    this.todos = [
      {
        id: 1,
        title: 'Install Angular CLI',
        isCompleted: false,
        editing: false,
      },
      {
        id: 2,
        title: 'Style App',
        isCompleted: false,
        editing: false,
      },
      {
        id: 3,
        title: 'Finish Service Functionality',
        isCompleted: false,
        editing: false,
      },
      {
        id: 4,
        title: 'Setup API',
        isCompleted: false,
        editing: false,
      },
    ];
  }
  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }
    this.todos.push({
      id: this.idForTodo,
      title: this.todoTitle,
      isCompleted: false,
      editing: false,
    });
    this.todoTitle = '';
    this.idForTodo++;
  }
  editItem(todo: any): void {
    todo.editing = true;
  }
  doneEdit(todo: any) {
    todo.editing = false;
  }

  deleteItem(id: number): void {
    this.todos = this.todos.filter((todo: any) => todo.id !== id);
  }
  remaining(): number {
    return this.todos.filter((todo: any) => !todo.isCompleted).length;
  }
  clearCompleted() {
    this.todos = this.todos.filter((todo: any) => !todo.isCompleted);
  }
  todosFilter(): any {
    if (this.filters == 'all') {
      return this.todos;
    } else if (this.filters == 'active') {
      return this.todos.filter((todo: any) => !todo.isCompleted);
    } else if (this.filters == 'completed') {
      return this.todos.filter((todo: any) => todo.isCompleted);
    }
    return this.todos;
  }
}
