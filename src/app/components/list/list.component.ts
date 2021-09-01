import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() tasks!: Task[];
  @Output() removeTaskClick: EventEmitter<Task> = new EventEmitter();
  @Output() toggleTaskDoneClick: EventEmitter<Task> = new EventEmitter();
  
  constructor() { }
  
  ngOnInit(): void { }

  toggleDone(task: Task) {
    task.done = !task.done;
    this.toggleTaskDoneClick.emit(task);
  }

  removeTask(task: Task) {
    this.removeTaskClick.emit(task);
  }

}
