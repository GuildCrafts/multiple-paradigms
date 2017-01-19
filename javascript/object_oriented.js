
const oo = (str) => {
  const root = new Node(str)
  return console.log(`Output:\v${root.parse()}\v`), root.parse()
}

class Node {
  constructor( input, tag='div' ){
    this.open = `<${tag}>`
    this.content = this.formatInput(input)
    this.close = tag === 'hr' ? '' : `</${tag}>`
    this.zygotes = {
      p: '\S*',
      hr: '-{3,}\n',
      pre: '`{3}\w*\n[^]*\n`{3}',
      list: null,
      quote: '> .+(?:\n[^ ](?:> )?.+)*',
      header: '#{1,6} .+\n'
    }
  }

  parse () {
    const content = this.content.parse
      ? `\n\t${this.content.parse()}`
      : this.content
    return `${this.open + content + this.close}`
  }

  formatInput (input) {
    return typeof input === 'string'
      ? input.replace(/^\n+/, '')
      : (() => { throw new TypeError('Input must be a string.') })()
  }
}

export default oo
