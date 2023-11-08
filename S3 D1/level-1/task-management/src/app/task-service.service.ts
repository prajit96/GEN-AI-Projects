import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  constructor() { }

  // Add a new task to the tasks array and emit the updated tasks
  addTask(task: Task): void {
    this.tasks.push(task);
    this.tasksSubject.next([...this.tasks]);
  }

  // Get an observable that emits the current tasks array
  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  // Delete a task by id and emit the updated tasks
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next([...this.tasks]);
  }
  getTaskById(id: number): Observable<Task | undefined> {
    console.log('Fetching task by ID:', id);
    return this.tasksSubject.asObservable().pipe(
      map(tasks => tasks.find(task => task.id === id))
    );
  }  
}
