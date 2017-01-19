import { expect } from 'chai'
import oo from '../object_oriented.js'
import functional from '../functional.js'
import imperative from '../imperative.js'

const tags = {
  root: {
    list: ['ol', 'ul']
      , header: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
      , blockQuote: 'blockquote'
      , hr: 'hr'
      , paragraph: 'p'
      , codeBlock: 'pre'
  }
    , formatting: {
      link: 'a'
        , bold: 'strong'
        , italic: 'em',
        , boldItalic: {
            bold: 'strong'
          , italic: 'em'
        }
    }
    , terminal: {
      image:
    }
}

const test = (input, output) => {
  const paradigms = [
    ['Object Oriented', oo]
    , ['Functional', functional]
    , ['Imperative', imperative]
  ]

  paradigms.map( paradigm => {
    const [name, fn] = paradigm
    it(name, () => {
      expect(fn(input)).to.equal(output)
    })
  })
}

const testNested = (element) => {
  const [name, tag] = element

  describe(`Within ${name} / ${tag}: `, () => {
    const fileName = name

    const input = 'test' // use FS to read input file into single string
    const output = fileName // use FS to read output file into single string

    test(input, output)
  })
}

describe('Multiple Paradigms', () => {
  'use strict'

  it('A function exists for each paradigm', () => {
    const paradigms = [oo, functional, imperative]
    paradigms.map( x => expect(x).to.be.a('function') )
  })

  it('Each function returns valid html', () => {
    test('', '<div></div>')
  })


})

describe('\nCorrectly parses root structures:', () => {

  describe('\\n\\n + text + \\n\\n -> <p>', () => {

    const input = '\n\ntest\n\n'
    const output = '<p>test</p>'

    test(input, output)
  })

  describe('# + text + \\n -> <h1>', () => {

    const input = '#test\n'
    const output = '<h1>test</h1>'

    test(input, output)
  })
})

describe('\nCorrectly parses nested structures: ', () => {
  testNested(['paragraph', '<p>'])
  })
