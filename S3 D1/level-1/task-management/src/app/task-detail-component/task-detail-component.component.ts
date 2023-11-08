import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, TaskService } from '../task-service.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail-component.component.html',
  styleUrls: ['./task-detail-component.component.css']
})
export class TaskDetailComponentComponent implements OnInit {
  task: Task | undefined;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
    console.log('Route Params:', this.route.snapshot.paramMap);
  }
  

  ngOnInit(): void {
    // Extract the 'id' parameter from the route and parse it as a number
    const taskId = Number(this.route.snapshot.paramMap.get('id'));

    console.log('Extracted task ID:', taskId); // Log the extracted taskId

    // Check if taskId is a valid number before making the API call
    if (!isNaN(taskId)) {
      // Fetch the task based on the 'id' parameter
      this.taskService.getTaskById(taskId).subscribe(task => {
        this.task = task;
        console.log('Fetched task:', task); // Log the fetched task
      });
    } else {
      console.error('Invalid task ID:', taskId);
      // Handle the case where taskId is not a valid number, e.g., show an error message or redirect to a different page.
    }
  }
}
