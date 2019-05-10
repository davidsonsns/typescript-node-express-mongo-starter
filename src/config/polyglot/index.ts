import Polyglot from 'node-polyglot'

import locales from '@config/locales'

export default (locale: string) => {
  const phrases = locales[locale]

  const polyglot = new Polyglot()
  polyglot.extend(phrases)

  return polyglot
}