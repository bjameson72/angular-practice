import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Todo } from "../models/Todo";
import { AngularFireDatabase } from "@angular/fire/database";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todosUrl: string = "https://todo-list-56814.firebaseio.com/";
  todoValue = "";
  todos: Observable<any[]>;
  // todosLimit = "?_limit=3";

  constructor(public db: AngularFireDatabase) {
    this.todos = db.list("todos").valueChanges();
    this.todoValue = "";
  }

  // Get Todos
  getTodos() {
    console.log(this.todos);
  }

  // Delete Todo
  // deleteTodo(todo: Todo): Observable<Todo> {
  //   // const url = `${this.todosUrl}/${todo.id}`;
  //   // return this.http.delete<Todo>(url, httpOptions);
  // }

  // Add Todo
  addTodo(todo: Todo) {
    this.db.list("todos").push({ content: this.todoValue });
  }

  // Toggle Completed
  toggleCompleted(todo: Todo) {
    this.db.list("todos").push({ Completed: this.todoValue });
  }
}
