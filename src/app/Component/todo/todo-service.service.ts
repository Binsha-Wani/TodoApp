import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  todos: any = [];
  idForTodo: any = 5;
  constructor() {
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

  add(data: any) {
    if (data.trim().length === 0) {
      return;
    }
    this.todos.push({
      id: this.idForTodo,
      title: data,
      isCompleted: false,
      editing: false,
    });
    this.idForTodo++;
  }
  edit(todo: any): void {
    todo.editing = true;
  }
  completeEditing(todo: any) {
    todo.editing = false;
  }
  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo: any) => todo.id !== id);
  }
  clearCompleted() {
    this.todos = this.todos.filter((todo: any) => !todo.isCompleted);
  }
  todosFilter(filters: any) {
    if (filters == 'all') {
      return this.todos;
    } else if (filters == 'active') {
      return this.todos.filter((todo: any) => !todo.isCompleted);
    } else if (filters == 'completed') {
      return this.todos.filter((todo: any) => todo.isCompleted);
    }
    return this.todos;
  }
}
