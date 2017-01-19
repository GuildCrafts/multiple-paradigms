
const oo = (str) => {
  const root = new Node(str)
  return root.parse()
}

class Node {
  constructor( input, tag='div' ){
    this.open = `<${tag}>`
    this.content = this.formatInput(input)
    this.close = tag === 'hr' ? '' : `</${tag}>`
  }

  parse () {
    const content = this.content.parse ? this.content.parse() : this.content
    return this.open + content + this.close
  }

  formatInput (input) {
    return typeof input === 'string'
      ? input.replace(/^\n+/, '')
      : (() => { throw new TypeError('Input must be a string.') })()
  }
}

export default oo
