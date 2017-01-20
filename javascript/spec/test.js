

import { expect } from 'chai'
import oo from '../object_oriented.js'
import functional from '../functional.js'
import imperative from '../imperative.js'

// const tags = {
//   root: {
//     list: ['ol', 'ul']
//       , header: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
//       , blockQuote: 'blockquote'
//       , hr: 'hr'
//       , paragraph: 'p'
//       , codeBlock: 'pre'
//   }
// }

const activeParadigms = [
  oo
  // , functional
  // , imperative
]

const test = (config) => {
  const {description, input, output} = config

  it(description, () => {
    activeParadigms.forEach( paradigm => {
      expect(paradigm(input).toString()).to.equal(output.toString())
    })
  })
}

// const testNested = (element) => {
//   const [name, tag] = element

//   describe(`Within ${name} / ${tag}: `, () => {
//     const fileName = name

//     const input = 'test' // use FS to read input file into single string
//     const output = fileName // use FS to read output file into single string

//     test(input, output)
//   })
// }

describe('Multiple Paradigms:', () => {

  it('A function exists for each paradigm', () => {
    const paradigms = [oo, functional, imperative]
    paradigms.forEach( x => { expect(x).to.be.a('function') } )
  })

  describe('Each function', () => {
    test({
      description: 'returns valid html'
      , input: 'test'
      , output: '<div>test</div>'
    })

    it('throws an error if passed invalid input', () => {
      const paradigms = activeParadigms
      paradigms.forEach(x => { expect(() => x('')).to.throw(
        'Invalid input! Requires a non-empty string.'
      )})
    })

    test({
      description: 'removes leading whitespace'
      , input: '\v\r\n\n\ntest'
      , output: '<div>test</div>'
    })
  })

  describe('Correctly parses root structures:', () => {
    it('pending')
    // test({
    //   description: 'paragraph'
    //   , input: 'test'
    //   , output: '<p>test</p>'
    // })

    // test({
    //   description: 'header\n'
    //   , input: '# test'
    //   , output: '<h1>test</h1>'
    // })
  })
  describe('Correctly parses nested structures: ', () => {
    it('pending')
    // testNested(['paragraph', '<p>'])
  })
})

