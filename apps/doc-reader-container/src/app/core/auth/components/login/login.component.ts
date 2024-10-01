import {
  Component,
  ChangeDetectionStrategy,
  Signal,
  computed,
} from '@angular/core';
import { signalState, patchState } from '@ngrx/signals';
import { FormsModule } from '@angular/forms';

type SignalValue<T extends Signal<unknown>> = T extends Signal<infer V>
  ? V
  : never;

@Component({
  selector: 'drc-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  protected readonly LoginForm = signalState({
    company: 'debug',
    username: 'daniel',
    password: 'Passw@rd123',
  });

  private readonly UsernameValidationPattern = /^[a-zA-Z0-9]{3,20}$/;
  private readonly PasswordValidationPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  protected readonly LoginFormValidator$ = computed(() => {
    const { company, username, password } = this.LoginForm();
    const validators = {
      company: company.length > 0,
      username: this.UsernameValidationPattern.test(username),
      password: this.PasswordValidationPattern.test(password),
    };
    return {
      isFormValid: Object.values(validators).every((v) => v),
      ...validators,
    };
  });

  protected patchLoginForm<K extends keyof SignalValue<typeof this.LoginForm>>(
    key: K,
    value: SignalValue<typeof this.LoginForm>[K]
  ) {
    patchState(this.LoginForm, (state) => {
      if (key in state) {
        state[key] = value;
      }
      return state;
    });
  }

  constructor() {}

  protected login(): void {
    const { company, username, password } = this.LoginForm();
  }
}
