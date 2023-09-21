import { FormControl } from "@angular/forms";

export interface Login {
  name: string;
  email: string;
}
export interface LoginForm {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
}