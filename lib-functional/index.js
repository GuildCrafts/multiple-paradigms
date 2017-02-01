var tempString = "A full **commitment's** what Im __thinking of__" +
  "You wouldn't get this from **any other guy**"


function asteriskBold() {
  return tempString.replace(/\*\*(.+?)\*\*/gm, '<b>$&</b>')
  /* This selects all letters that are wrapped in double asterisks with the min
  amount of letters between them, and puts bold tags around them*/
}

function removeAsterisks(string) {
  return string.replace(/\*\*/gm, '')
  //this removes double asterisks
}

removeAsterisks(asteriskBold())
