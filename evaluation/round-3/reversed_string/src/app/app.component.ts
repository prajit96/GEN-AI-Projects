import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputString: string = '';
  reversedString: String = '';

  reverseString(): void{
    this.reversedString = this.inputString.split('').reverse().join('');
  }

}
