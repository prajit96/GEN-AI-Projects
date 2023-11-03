import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  profileForm: FormGroup;
  submittedData: any;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      phone: ['', [Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)]],
      profilePicture: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.profileForm.valid) {
      // Form submission logic (you can send the form data to your server here)
      this.submittedData = this.profileForm.value;
    } else {
      // Handle form validation errors
      this.profileForm.markAllAsTouched();
    }
  }

  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Set the file data to the form control
        this.profileForm.patchValue({
          profilePicture: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  }
}
