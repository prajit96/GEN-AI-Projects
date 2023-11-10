import { Injectable } from '@angular/core';
import { Observable, timer, throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData(): Observable<number> {
    return timer(0, 1000).pipe(
      take(5), // Emits data 5 times
      map((value) => {
        if (value === 3) {
          // Simulate an error on the 4th emission
          throw new Error('Simulated error during data retrieval');
        }
        return value;
      }),
      catchError((error) => {
        console.error('Error during data retrieval:', error);
        return throwError('An unexpected error occurred');
      })
    );
  }
}
