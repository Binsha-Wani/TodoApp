import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoServiceService],
})
export class TodoComponent implements OnInit {
  todoTitle: any;
  path: any = 'all';
  constructor(
    private service: TodoServiceService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.path = params['status'];
    });
  }
  addTodo(): void {
    this.service.add(this.todoTitle);
    this.todoTitle = '';
  }
  editItem(todo: any): void {
    this.service.edit(todo);
  }
  doneEdit(todo: any) {
    this.service.completeEditing(todo);
  }
  deleteItem(id: number): void {
    this.service.deleteTodo(id);
  }
  remaining(): number {
    return this.service.todos.filter((todo: any) => !todo.isCompleted).length;
  }
  clearCompleted() {
    this.service.clearCompleted();
  }

  todosFilter(): any {
    return this.service.todosFilter(this.path);
  }
}
