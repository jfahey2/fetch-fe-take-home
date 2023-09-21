import { ValidationErrors } from '@angular/forms';

/**
 * Retrieves and formats the error message associated with a specific validator using the provided error details.
 * @param validatorName - The name of the validator for which to get the error message.
 * @param validatorErrors - The details of the validation errors.
 * @returns The formatted error message or undefined if the validator name is not found.
 */

export const getValidatorErrorMessage = (
  validatorName: string,
  validatorErrors?: ValidationErrors
): string | undefined => {
  const args = messages
    .get(validatorName)
    ?.validatorErrorsKey?.map((name) => validatorErrors?.[name]);
  return args
    ? stringFormat(messages.get(validatorName)?.message, ...args)
    : messages.get(validatorName)?.message;
};

/** Stores validation error messages and their respective keys */

const messages = new Map<
  string,
  { message: string; validatorErrorsKey?: string[] }
>([
  ['required', { message: 'This field is required' }],
  ['email', { message: 'Must be a valid email address' }],
]);

/**
 * A utility function to format strings using placeholders and provided arguments.
 * @param template - The template string containing placeholders.
 * @param args - The values to replace the placeholders in the template.
 * @returns The formatted string or undefined if the template is undefined.
 */

function stringFormat(template: string | undefined, ...args: string[]) {
  if (template) {
    return template.replace(/{(\d+)}/g, (match, index) => {
      return typeof args[index] !== 'undefined' ? args[index] : match;
    });
  }
  return undefined;
}
