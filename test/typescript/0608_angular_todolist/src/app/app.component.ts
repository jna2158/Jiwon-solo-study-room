import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoInput = new FormControl('');
  todo: string | null = '';

  assignTodo(event: MouseEvent): void {
    event.preventDefault();

    if (!localStorage.getItem('todo')) {
      localStorage.setItem('todo', JSON.stringify([]));
    }
    const prevArr = localStorage.getItem('todo');
    if (this.todoInput.value && prevArr) {
      const newArr = [
        ...JSON.parse(prevArr),
        typeof this.todoInput.value === 'string'
          ? this.todoInput.value
          : JSON.stringify(this.todoInput.value),
      ];

      localStorage.setItem('todo', JSON.stringify(newArr));
    }
    this.todo = localStorage.getItem('todo');
    if (this.todo) {
      this.todo = JSON.parse(this.todo);
    }
  }
}
