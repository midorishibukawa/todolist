import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { Priority } from 'src/app/models/Priority';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tasks!: Task[];
  
  constructor() { }
  
  ngOnInit(): void { }

}
