import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tracking-info',
  templateUrl: './tracking-info.component.html',
  styleUrls: ['./tracking-info.component.css']
})
export class TrackingInfoComponent implements OnInit {

  trackingIdForm: FormGroup;
  submitted = false;
  formValue: any;

  constructor(public fb: FormBuilder) { 
    this.trackingIdForm = this.fb.group({
      trackingId: ['', Validators.required]
    });
  }

  ngOnInit(): void {    
  }

  onSubmit( form:FormGroup){
    this.formValue = form.value;

  }
}
