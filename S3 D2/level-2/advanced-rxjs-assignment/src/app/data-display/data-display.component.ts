// src/app/data-display/data-display.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent implements OnInit, OnDestroy {
  private dataSubscription: Subscription | null = null;
receivedData: number | null = null;
error: string | null = null;


  constructor(private dataService: DataService) {
    this.dataSubscription = new Subscription();
    this.receivedData = 0;
    this.error = '';
  }
  
  ngOnInit(): void {
    // Subscribe to the observable on component initialization
    this.dataSubscription = this.dataService.getData().subscribe(
      (data) => {
        console.log('Received data:', data);
        this.receivedData = data; // Set received data for display
      },
      (error) => {
        console.error('Error:', error);
        this.error = error; // Set error for display
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from the observable to prevent memory leaks
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
