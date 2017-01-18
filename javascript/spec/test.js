import chai, { expect } from 'chai'
import oo from '../object_oriented.js'
import functional from '../functional.js'
import imperative from '../imperative.js'

const test = (input, output) => {
  const paradigms = [
    ['Object Oriented', oo]
    , ['Functional', functional]
    , ['Imperative', imperative]
  ]

  for (let i in paradigms) {
    const [name, fn] = [paradigms[i][0], paradigms[i][1]]
    it(name, () => {
      expect(fn(input)).to.equal(output)
    })
  }
}

const nest = (element) => {
  const [name, tag] = [element]

  describe(`Within ${name} / ${tag}: `, () => {
    const fileName = name
    
    const input = '' // use FS to read input file into single string
    const output = '' // use FS to read output file into single string

    test(input, output)
  })
}

describe('Multiple Paradigms', () => {
  'use strict'

  it('A function exists for each paradigm', () => {
    expect(oo).to.be.a('function')
    expect(functional).to.be.a('function')
    expect(imperative).to.be.a('function')
  })


  describe('\nCorrectly parses the following structures:', () => {

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
    nest(['paragraph', '<p>'])
  })
})
