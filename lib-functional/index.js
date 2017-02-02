// BOLD //
function addBoldHTML(input) {
  return input.replace(/((\*\*)|(\_\_))(.+?)((\*\*)|(\_\_))/gm, '<b>$&</b>')
  /* This selects all letters that are wrapped in double asterisks or double
  underscores, with the min amount of letters between them, and puts bold tags
  around them */
}

function removeBoldMD(string) {
  return string.replace(/\*\*|\_\_/gm, '')
  //this removes double asterisks
}

// ITALICS //
function addItalicsHTML(input) {
  return input.replace(/(\*|\_)(.+?)(\*|\_)/gm, '<i>$&</i>')
}

function removeItalicsMD(string) {
  return string.replace(/\*|\_/gm, '')
}

// PARAGRAPHS // - WIP
function addParagraphHTML(input) {
  return input.replace(/^(?!(<li>|<h[0-6]>|<\/*hr>|<\/*ol>|<\/*ul>|<\/*quote>|(placeholderforblockquotes)))(.)+\n/gm,
    '<p>$&</p>')
}


// HEADINGS //
function addH6(input) {
  return input.replace(/^#{6}(.+)/gm, '<h6>$&</h6>')
}

function addH5(input) {
  return input.replace(/^#{5}(.+)/gm, '<h5>$&</h5>')
}

function addH4(input) {
  return input.replace(/^#{4}(.+)/gm, '<h4>$&</h4>')
}

function addH3(input) {
  return input.replace(/^#{3}(.+)/gm, '<h3>$&</h3>')
}

function addH2(input) {
  return input.replace(/^#{2}(.+)/gm, '<h2>$&</h2>')
}

function addH1(input) {
  return input.replace(/^#{1}(.+)/gm, '<h1>$&</h1>')
}

function removeHeadersMD(input) {
  return input.replace(/^(<h([0-6])>)(#)+ /gm, '$1')
}

// LINKS //
function addLinks(input) {
  return input.replace(/\[(.+)\]\((.+)\)/gm, '<a href="$2">$1</a>')
}

// IMAGES //
function addImages(input) {
  return input.replace(/!\[(.+)\]\((.+)\)/gm, '<img="$2" alt= "$1">')
}

// UNORDERED LISTS //
function addUnorderedList(input) {
  return input.replace( /^(-(.+)(\n){1})+/gm, `<ul>
$&</ul>
`)
// backticks will include linebreaks as well as tabs
}

// ORDERED LISTS //
function addOrderedList(input) {
  return input.replace( /^((\d+\. )(.+)(\n){1})+/gm, `<ol>
$&</ol>
`)
// backticks will include linebreaks as well as tabs
}

// BONUS: BOTH LIST ITEM TYPES //
function addListItems(input) {
  return input.replace( /^(- |\d+\. ).+/gm, '<li>$&</li>')
}

function removeListItemsMD(input) {
  return input.replace( /^(<li>)(- |\d+\. )/gm, '$1')
}

// BLOCKQUOTES //
function addBlockQuotes(input) {
  return input.replace(/^(>(.+)(\n){1})+/gm, `<quote>
$&</quote>
`)
// backticks will include linebreaks as well as tabs
}

function removeBlockQuotesMD(input) {
  return input.replace(/^> /gm, '')
}

// HORIZONTAL RULES //
function addHorizontalRule(input) {
  return input.replace(/(\*{3,})|(\* \* \*)|(- - -)|(-{3,})/gm, '<hr>')
}

function removeHorizontalMD(input) {
  return input.replace(/(\*{3,})|(\* \* \*)|(- - -)|(-{3,})/gm, '')
}

// INLINE CODE //
function addInlineCode(input) {
  return input.replace(/`[^`].+`/gm, "<code>$&</code>")
}

function removeInlineCodeMD(input) {
  return input.replace(/`/gm, '')
}

// CODE BLOCK //
function addCodeBlock(input) {
  return input.replace(/^(```\n)((.)+(\n))+(```)$/gm, `<pre><code>
$&
</pre><code>`)
}

function removeCodeBlockMD(input) {
  return input.replace(/\n```/gm, '')
}

function applyParsingFunctions(markdownFile) {
  return functionNames.reduce(function(markdownFileState, functionName) {
    return functionName(markdownFileState)
  }, markdownFile)
}

var functionNames = [addImages, addLinks, addCodeBlock, removeCodeBlockMD,
  addInlineCode, removeInlineCodeMD, addBlockQuotes, removeBlockQuotesMD,
  addH6, addH5, addH4, addH3, addH2, addH1, removeHeadersMD, addHorizontalRule,
  removeHorizontalMD, addOrderedList, addUnorderedList, addListItems,
  removeListItemsMD, addBoldHTML, removeBoldMD, addItalicsHTML, removeItalicsMD]




// EXPORTS //
exports.functionNames = functionNames
exports.applyParsingFunctions = applyParsingFunctions

// Bold & Italics //
exports.addBoldHTML = addBoldHTML
exports.removeBoldMD = removeBoldMD
exports.addItalicsHTML = addItalicsHTML
exports.removeItalicsMD = removeItalicsMD

//Horizontal Rule//
exports.addHorizontalRule = addHorizontalRule
exports.removeHorizontalMD = removeHorizontalMD

//Headers//
exports.addH1 = addH1
exports.addH2 = addH2
exports.addH3 = addH3
exports.addH4 = addH4
exports.addH5 = addH5
exports.addH6 = addH6
exports.removeHeadersMD = removeHeadersMD

//Links + Images//
exports.addLinks = addLinks
exports.addImages = addImages

//Lists//
exports.addUnorderedList = addUnorderedList
exports.addOrderedList = addOrderedList
exports.addListItems = addListItems
exports.removeListItemsMD = removeListItemsMD

//Block Quotes//
exports.addBlockQuotes = addBlockQuotes
exports.removeBlockQuotesMD = removeBlockQuotesMD

//Code//
exports.addCodeBlock = addCodeBlock
exports.removeCodeBlockMD = removeCodeBlockMD
exports.addInlineCode = addInlineCode
exports.removeInlineCodeMD = removeInlineCodeMD
