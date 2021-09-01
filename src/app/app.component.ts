import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { Task } from './models/Task';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public tasks: Task[];
  private ts: TasksService = new TasksService();

  constructor() {
    this.tasks = this.ts.getTasks();
  }

  ngOnInit(): void { }

  addTask(task: Task) {
    this.ts.addTask(task);
  }

  removeTask(task: Task) {
    this.ts.removeTask(task);
  }

  save() {
    this.ts.saveLocalData();
  }

}
