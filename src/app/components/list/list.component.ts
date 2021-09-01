import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() tasks!: Task[];
  @Output() deleteTaskClick: EventEmitter<Task> = new EventEmitter();
  
  constructor() { }
  
  ngOnInit(): void { }

  toggleDone(task: Task) {
    task.done = !task.done;
  }

  deleteTask(task: Task) {
    this.deleteTaskClick.emit(task);
  }

}
