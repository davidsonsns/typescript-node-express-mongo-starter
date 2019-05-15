// tslint: no-invalid-template-strings

export let mixed = {
  default: '${path} é inválido',
  required: '${path} é um campo obrigatório',
  oneOf: '${path} must be one of the following values: ${values}',
  notOneOf: '${path} must not be one of the following values: ${values}',
}

export let string = {
  length: '${path} must be exactly ${length} characters',
  min: '${path} must be at least ${min} characters',
  max: '${path} must be at most ${max} characters',
  matches: '${path} must match the following: "${regex}"',
  email: '${path} must be a valid email',
  url: '${path} must be a valid URL',
  trim: '${path} must be a trimmed string',
  lowercase: '${path} must be a lowercase string',
  uppercase: '${path} must be a upper case string',
}

export let number = {
  min: '${path} must be greater than or equal to ${min}',
  max: '${path} must be less than or equal to ${max}',
  lessThan: '${path} must be less than ${less}',
  moreThan: '${path} must be greater than ${more}',
  notEqual: '${path} must be not equal to ${notEqual}',
  positive: '${path} must be a positive number',
  negative: '${path} must be a negative number',
  integer: '${path} must be an integer',
}

export let date = {
  min: '${path} field must be later than ${min}',
  max: '${path} field must be at earlier than ${max}',
}

export let boolean = {}

export let object = {
  noUnknown: '${path} field cannot have keys not specified in the object shape',
}

export let array = {
  min: '${path} field must have at least ${min} items',
  max: '${path} field must have less than or equal to ${max} items',
}

export default {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
}