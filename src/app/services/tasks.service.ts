import { Injectable } from '@angular/core';
import { Priority } from '../models/Priority';
import { Task } from '../models/Task';

const LOCAL_STORAGE_KEY: string = "todolist";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private list: Task[];

  constructor() {
    this.list = this.loadLocalData();
  }

  addTask(task: Task): void {
    this.list.push(task);
  }

  public getTasks(): Task[] {
    return this.list; 
  }

  private removeTask(task : Task): void {
    this.list.splice(this.list.indexOf(task), 1);
    // this.render();
    this.saveLocalData();
  }

  private saveLocalData(): void {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.list));
  }

  private loadLocalData(): Task[] {
    const localData = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    return localData ? JSON.parse(localData) : [];
  }

}
