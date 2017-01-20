import regeneratorRuntime from 'regenerator-runtime'

const oo = (str) => {
  const root = (str && typeof str === 'string')
    ? new Ancestor(str)
    : (() => {
        throw new Error('Invalid input! Requires a non-empty string.')
      })()

  return root.html || new Error('Something went wrong. Root creation failed.')
}

const dna = {
  ancestor: {
    hr: '^-{3,}(\n+\s|$)',
    pre: '^`{3}\\w*\n[^]*\n`{3}(\n|$)',
    // list: null,
    quote: '^> .+(?:\n[^ ](?:> )?.+)*',
    header: '^#{1,6} .+(\n+\s|$)'
  }
  //, branch: {
  //   link: '^.+',
  //   image: '^.+',
  //   text: '^.+'
  // }
}

const genome = (() => {
  const output = {}

  for (let group in dna) {
    output[group] = []
    for (let key in dna[group]) {
      output[group].push(`${dna[group][key]}`)
    }
    output[group] = new RegExp(output[group].join('|'), 'gm')
  }
  return output
})()

class Ancestor {
  constructor ( input, phenotype='div', genotype='ancestor' ) {
    this.tags = phenotype
    this.genes = genotype
    this.children = this.nameChildren(input)
  }

  *[Symbol.iterator]() {
    yield this.open
    yield this.children
    yield this.close
  }

  get html () {
    return [...this].join('')
  }

  set tags (phenotype) {
    [this.open, this.close] = phenotype !== 'hr'
      ? ['', '/'].map(x => `<${x}${phenotype}>`)
      : ['<hr>', '']
  }

  set genes (genotype) {
    this.dna = dna[genotype]
    this.genome = genome[genotype]
  }

  sanitizeInput (str) {
    return str ? str.trimLeft() : ''
  }

  incubate ( dna ) {
    return this.genome.test(dna)
      ? [...dna.match(this.genome)]
      : dna
  }

  fertilize (str) {
    const dna = this.sanitizeInput(str)
    return this.incubate(dna)
  }

  nameChildren (str) {
    return this.fertilize(str)
  }
}

class Parent {
  constructor () {
    this.__proto__ = Ancestor
    console.log(this.__proto__)
  }
}

export default oo
