import {
  ArraySchemaConstructor,
  BooleanSchemaConstructor,
  DateSchemaConstructor,
  MixedSchemaConstructor,
  NumberSchemaConstructor,
  ObjectSchemaConstructor,
  StringSchemaConstructor,
} from 'yup'

interface IYup {
  mixed: MixedSchemaConstructor
  string: StringSchemaConstructor
  number: NumberSchemaConstructor
  boolean: BooleanSchemaConstructor
  bool: BooleanSchemaConstructor
  date: DateSchemaConstructor
  array: ArraySchemaConstructor
  object: ObjectSchemaConstructor
}

export const post = (yup: IYup, params: object) =>
  yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  }).validateSync(params, { abortEarly: false })