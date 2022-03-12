import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static confirmPasswordMatches(control: AbstractControl) : ValidationErrors | null {
        if (control.get("newPassword")?.value != control.get("confirmPassword")?.value)
            return { confirmPasswordMatches: true }

        return null
    }

    static asyncVerifyPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== "1234")
                    resolve({ asyncVerifyPassword: true })
                else
                    resolve(null)
            }, 2000)
        })
    }
}