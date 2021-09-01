import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { Task } from './models/Task';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public newTask!: Task;
  public list: Task[];
  private ts: TasksService = new TasksService();

  constructor() {
    this.list = this.ts.getTasks();
  }

  ngOnInit(): void { }

  addTask(task: Task) {
    this.ts.addTask(task);
    this.newTask = task;
  }

}
