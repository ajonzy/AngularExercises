import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent {
  form: any

  constructor(fb: FormBuilder) {  
    this.form = fb.group({
      oldPassword: ["", {validators: Validators.required, asyncValidators: PasswordValidators.asyncVerifyPassword, updateOn: "blur" }],
      newPassword: fb.group({
        newPassword: ["", Validators.required],
        confirmPassword: ["", Validators.required]
      }, { validators: PasswordValidators.confirmPasswordMatches })
    })
  }

  get oldPassword() {
    return this.form.get("oldPassword")
  }

  get newPasswordGroup() {
    return this.form.get("newPassword")
  }

  get newPassword() {
    return this.newPasswordGroup.get("newPassword")
  }

  get confirmPassword() {
    return this.newPasswordGroup.get("confirmPassword")
  }
}
