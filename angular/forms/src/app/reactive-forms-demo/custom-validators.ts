import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = nameRe.test(control.value);

        // 通过返回 null
        // 不通过返回具体原因
        return forbidden ? {
            'forbiddenName': { value: control.value }
        } : null;
    };

}
