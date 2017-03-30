import Asterisk from './asterisk.js'
import Bang from './bang.js'
import Hash from './hash.js'
import Underscore from './underscore.js'

export default class Factory {


  switch(symbol) {
    case '*': return new Asterisk(symbol); break;
    case '!': return new Bang(symbol); break;
    case '#': return new Hash(symbol); break;
    case '_': return new Underscore(symbol); break;
  }
}
