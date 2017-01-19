
const bounds = {
}

const oo = (str) => {
  const root = new Node(str)
  return root.parse()
}

class Node {
  constructor( content, tag='div' ){
    this.open = `<${tag}>`
    this.content = content
    this.close = tag === 'hr' ? '' : `</${tag}>`
  }

  parse () {
    const content = this.content.parse ? this.content.parse() : this.content
    return `${this.open, content, this.close}`
  }
}

export default oo
