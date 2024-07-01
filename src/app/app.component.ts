import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Contact } from './contact';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contact-form';
  contact: Contact = new Contact();
  isFormSubmited: boolean = false;
  isSubmitBtnClicked: boolean = false;

  onSubmit(contactForm){
    this.isSubmitBtnClicked = true;
    if(contactForm.form.valid){
      this.isFormSubmited = true;
      this.isSubmitBtnClicked = false;
      console.log(contactForm.value);
      contactForm.reset();
      setTimeout(()=>{this.isFormSubmited = false}, 3000);
    }
  }
}
