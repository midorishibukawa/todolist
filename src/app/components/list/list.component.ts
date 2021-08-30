import { Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE_KEY } from 'src/main';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tasks: Task[];
  constructor() {
    this.tasks = this.loadLocalData();
  }
  
  private saveLocalData() {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.tasks));
  }

  private loadLocalData() {
    const localData = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    return localData ? JSON.parse(localData) : [];
  }
  
  ngOnInit(): void {
  }

}
