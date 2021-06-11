const numberArray = [0,1,2,3,4];
let newArray = []

function getRoboMessage(numberinput) {
  for (i = 0; i < numberArray.length; i++) {
    if (i === 1) {
    newArray.push(" beep!")
  } else if (i === 2) {
    newArray.push(" boop!")
  } else {
    newArray.push(numberArray[i])
  }
  }
  return newArray;
}



$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault()
    const numberinput = parseInt($("input#numberinput").val());
    const newArray = getRoboMessage(numberinput)
    $(".output").text(newArray);
  })
})