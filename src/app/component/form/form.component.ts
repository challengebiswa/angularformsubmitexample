import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from './user';
@Component({
    selector: 'app-form',
    styleUrls: ['./form.component.css'],
    templateUrl: 'form.component.html'
})
 
export class FormComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    user:any;
    constructor(private formBuilder: FormBuilder) { }
 
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
        this.user=new User('','','','');
    }
 
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
 
    onSubmit() {
        this.submitted = true;
        console.log(this.registerForm.get("firstName").value);
        console.log(this.user.firstName);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
          console.log("form invalid");
            return;
        }
 
        alert('SUCCESS!! :-)')
    }
}