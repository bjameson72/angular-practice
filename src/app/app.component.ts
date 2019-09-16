import { Component } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todoValue = "";
  todos: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.todos = db.list("todos").valueChanges();
  }

  onSubmit() {
    this.db.list("todos").push({ content: this.todoValue });
    this.todoValue = "";
  }
}
