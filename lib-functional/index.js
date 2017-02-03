function applyParsingFunctions(markdownFile) {
  return functionNames.reduce(function(markdownFileState, functionName) {
    return functionName(markdownFileState)
  }, markdownFile)
}

var functionNames = [addImages, addLinks, addCodeBlock, removeCodeBlockMD,
  addInlineCode, removeInlineCodeMD, addBlockQuotes, removeBlockQuotesMD,
  addH6, addH5, addH4, addH3, addH2, addH1, removeHeadersMD, addHorizontalRule,
  removeHorizontalMD, addOrderedList, addUnorderedList, addListItems,
  removeListItemsMD, addBoldHTML, removeBoldMD, addItalicsHTML, removeItalicsMD,
  addParagraphHTML]

exports.applyParsingFunctions = applyParsingFunctions


/** PARSING FUNCTIONS **/

// BOLD //
function addBoldHTML(input) {
  return input.replace(/((\*\*)|(\_\_))(.+?)((\*\*)|(\_\_))/gm, '<b>$&</b>')
}

function removeBoldMD(string) {
  return string.replace(/\*\*|\_\_/gm, '')
}

// ITALICS //
function addItalicsHTML(input) {
  return input.replace(/(\*|\_)(.+?)(\*|\_)/gm, '<i>$&</i>')
}

function removeItalicsMD(string) {
  return string.replace(/\*|\_/gm, '')
}

// PARAGRAPHS // - does not account for ignoring code blocks at the moment
function addParagraphHTML(input) {
  return input.replace(/^(?!<li>|<h[0-6]>|<\/*hr>|<\/*ol>|<\/*ul>|<\/*quote>|<\/*pre><code>|<img|<a href| )(.+\n)*(.+)(?=\n\n)/gm,
    '<p>$1$2</p>')
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
}

// ORDERED LISTS //
function addOrderedList(input) {
  return input.replace( /^((\d+\. )(.+)(\n){1})+/gm, `<ol>
$&</ol>
`)
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
