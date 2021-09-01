import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Priority } from 'src/app/models/Priority';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  @Output() formSubmit: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onSubmit(txt: string): void {
    console.log(txt);
    if (!txt) return;
    if (String(txt).match(/^#(1|2|3)\s/)) {
      this.formSubmit.emit(this.newTask(txt.slice(3), Number(txt.slice(1, 2))));
    } else {
      this.formSubmit.emit(this.newTask(txt, 1));
    }
  } 

  private newTask(txt: string, priority?: Priority) : Task {
    const task: Task = {
      txt: txt,
      done: false,
      priority: priority ? priority : Priority.low
    }

    return task;
  }
}
