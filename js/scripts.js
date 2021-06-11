const numberArray = [0,1,2,3];
const newArray = []

function getRoboMessage(numberinput) {
  for (i = 0; i < numberArray.length; i++) {
    newArray.push(numberArray[i])
  }
   return newArray; 
}
getRoboMessage(2);


$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault()
    const numberinput = parseInt($("input#numberinput").val());
    const newArray = getRoboMessage(numberinput)
    $(".output").text(newArray);
  })
})