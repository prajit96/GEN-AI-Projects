import { Component } from '@angular/core';
import { Task, TaskService } from '../task-service.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add-component.component.html',
  styleUrls: ['./task-add-component.component.css']
})
export class TaskAddComponentComponent {
  task: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private taskService: TaskService) {}

  addTask(): void {
    // Generate unique id for the task (you can use a library like uuid for this)
    this.task.id = Date.now();
    this.taskService.addTask(this.task);
    // Reset the form
    this.task = { id: 0, title: '', description: '', completed: false };
  }
}
