

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

const paradigms = [
  oo
  // , functional
  // , imperative
]

const test = (config) => {
  const {description, input, output} = config

  it(description, () => {
    paradigms.forEach( paradigm => {
      expect(paradigm(input)).to.equal(output)
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

  describe('Each function:', () => {
    test({
      description: 'Returns valid html'
      , input: ''
      , output: '<div></div>'
    })

    test({
      description: 'Removes leading whitespace'
      , input: '\n\n\nbutt'
      , output: '<div>butt</div>'
    })
  })

  it('Correctly parses root structures')
  // describe('Correctly parses root structures:', () => {
  //   // test({
  //   //   description: 'paragraph'
  //   //   , input: 'test'
  //   //   , output: '<p>test</p>'
  //   // })

  //   // test({
  //   //   description: 'header\n'
  //   //   , input: '# test'
  //   //   , output: '<h1>test</h1>'
  //   // })
  // })

  it('Correctly parses nested structures')
  // describe('Correctly parses nested structures: ', () => {
  //   testNested(['paragraph', '<p>'])
  // })
})

