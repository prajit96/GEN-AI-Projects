// custom-validators.ts
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static minimumAge(minAge: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const dob = new Date(control.value);
      const ageDiff = Date.now() - dob.getTime();
      const ageDate = new Date(ageDiff);
      const years = ageDate.getUTCFullYear() - 1970;

      return years >= minAge ? null : { minimumAge: true };
    };
  }
  

  static passwordStrength(control: AbstractControl): ValidationErrors | null {
    const password: string = control.value;

    if (!password) {
      // If no password is provided, return an error
      return { required: true };
    }

    // Regular expressions for password strength criteria
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    // Check if the password meets the criteria
    const isUppercase = uppercaseRegex.test(password);
    const isLowercase = lowercaseRegex.test(password);
    const hasDigit = digitRegex.test(password);
    const hasSpecialChar = specialCharRegex.test(password);

    const isValid = isUppercase && isLowercase && hasDigit && hasSpecialChar;

    // If the password doesn't meet the criteria, return an error
    return isValid ? null : { invalidPassword: true };
  }

  static usernameAvailability(control: AbstractControl): Promise<ValidationErrors | null> {
    // Implement username availability validation logic here (e.g., make an HTTP request)
    // Return a promise that resolves to null if the username is available, or an error object otherwise
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous request (replace this with your actual HTTP request)
      setTimeout(() => {
        if (control.value === 'takenUsername') {
          resolve({ unavailable: true });
        } else {
          resolve(null);
        }
      }, 2000); // Simulating a 2-second delay for the request
    });
  }
}
