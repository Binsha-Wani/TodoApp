import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './Component/todo/todo.component';

const routes: Routes = [
  { path: ':status', component: TodoComponent },
  { path: '**', redirectTo: '/all' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
