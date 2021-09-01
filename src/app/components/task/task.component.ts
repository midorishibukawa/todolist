import { Component, OnInit } from '@angular/core';

import { Priority } from 'src/app/models/Priority';

@Component({
  selector: 'todo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
    name!: string;
    done!: boolean;
    priority?: Priority;

  constructor() { }
 
  ngOnInit(): void {
  }

}
