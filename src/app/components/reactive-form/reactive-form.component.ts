import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  model = this.formBuilder.group({
    title: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.minLength(4)]],
    date: ['', Validators.required],
    contact: ['', [Validators.required, Validators.minLength(4)]]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  }
  onSubmit() {
    // Form submitted
    console.log(this.model);
  }

}
