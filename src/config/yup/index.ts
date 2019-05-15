import * as yup from 'yup'

import ptBR from './locales/pt_BR'

export default (language: string) => {
  const yupTmp = { ...yup }

  if (language === 'pt_BR') {
    yupTmp.setLocale(ptBR)
  }

  return yupTmp
}