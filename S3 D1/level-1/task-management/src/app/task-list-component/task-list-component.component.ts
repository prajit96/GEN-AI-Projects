import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task-service.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponentComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Subscribe to the tasks observable to get updated tasks
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  deleteTask(id: number): void {
    // Delete the task through the service (this will also update the observable)
    this.taskService.deleteTask(id);
  }
}
