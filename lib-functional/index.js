var tempString = "A full **commitment's** what Im __thinking of__" +
  "You wouldn't _get_ *this* from **any other guy**"


// BOLD //
function addBoldHTML(file) {
  return file.replace(/((\*\*)|(\_\_))(.+?)((\*\*)|(\_\_))/gm, '<b>$&</b>')
  /* This selects all letters that are wrapped in double asterisks or double
  underscores, with the min amount of letters between them, and puts bold tags
  around them */
}

function removeBoldMD(string) {
  return string.replace(/\*\*|\_\_/gm, '')
  //this removes double asterisks
}

// ITALICS //
function addItalicsHTML(file) {
  return file.replace(/(\*|\_)(.+?)(\*|\_)/gm, '<i>$&</i>')
}

function removeItalicsMD(string) {
  return string.replace(/\*|\_/gm, '')
}

// PARAGRAPHS // - WIP
function addParagraphHTML(file) {
  return file.replace(/(\*|\_)(.+?)(\*|\_)/gm, '<i>$&</i>')
}


// HEADINGS //
function addH6(file) {
  return file.replace(/^#{6}(.+)/gm, '<h6>$&</h6>')
}

function addH5(file) {
  return file.replace(/^#{5}(.+)/gm, '<h5>$&</h5>')
}

function addH4(file) {
  return file.replace(/^#{4}(.+)/gm, '<h4>$&</h4>')
}

function addH3(file) {
  return file.replace(/^#{3}(.+)/gm, '<h3>$&</h3>')
}

function addH2(file) {
  return file.replace(/^#{2}(.+)/gm, '<h2>$&</h2>')
}

function addH1(file) {
  return file.replace(/^#{1}(.+)/gm, '<h1>$&</h1>')
}

function removeHeadersMD(file) {
  return file.replace(/^(<h([0-6])>)(#)+ /gm, '$1')
}

// LINKS //


// IMAGES //


// UNORDERED LISTS //
function addUnorderedList(file) {
  return file.replace( /^(-(.+)(\n){1})+/gm, `<ul>
$&</ul>
`)
// backticks will include linebreaks as well as tabs
}

// ORDERED LISTS //
function addOrderedList(file) {
  return file.replace( /^((\d+\. )(.+)(\n){1})+/gm, `<ol>
$&</ol>
`)
// backticks will include linebreaks as well as tabs
}

// BONUS: BOTH LIST ITEM TYPES //
function addListItems(file) {
  return file.replace( /^(- |\d+\. ).+/gm, '<li>$&</li>')
}

function removeListItemsMD(file) {
  return file.replace( /^(<li>)(- |\d+\. )/gm, '$1')
}

// BLOCKQUOTES //
function addBlockQuotes(file) {
  return file.replace(/^(>(.+)(\n){1})+/gm, `<quote>
$&</quote>
`)
// backticks will include linebreaks as well as tabs
}

function removeBlockQuotesMD(file) {
  return file.replace(/^> /gm, '')
}

// HORIZONTAL RULES //
function addHorizontalRule(file) {
  return file.replace(/(\*{3,})|(\* \* \*)|(- - -)|(-{3,})/gm, '<hr>')
}

function removeHorizontalMD(file) {
  return file.replace(/(\*{3,})|(\* \* \*)|(- - -)|(-{3,})/gm, '')
}

// INLINE CODE //


// CODE BLOCK //


// EXPORTS //

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

//Lists//
exports.addUnorderedList = addUnorderedList
exports.addOrderedList = addOrderedList
exports.addListItems = addListItems
exports.removeListItemsMD = removeListItemsMD

//Block Quotes//
exports.addBlockQuotes = addBlockQuotes
exports.removeBlockQuotesMD = removeBlockQuotesMD
