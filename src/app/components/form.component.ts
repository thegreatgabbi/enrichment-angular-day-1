import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('form') addForm : NgForm;
  @Output() outForm = new EventEmitter<NgForm>();

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    this.outForm.next(this.addForm);
    this.addForm.resetForm();
  }

}
