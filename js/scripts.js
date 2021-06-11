const numberArray = [0,1,2,3,4,5,6,7,8,9];


function getRoboMessage(numberinput) {
  numberArray.forEach(function(element) {
  if (numberinput === 1) {
    roboMessage = "Beep!"
  } else if (numberinput === 2) {
    roboMessage = "Boop!"
  } else if (numberinput === 3) {
    roboMessage = "Won't you be my neighbor?"
  } else {
    roboMessage = numberinput
  }
  });
  return roboMessage;  
}
getRoboMessage()


$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault()
    const numberinput = parseInt($("input#numberinput").val());
    const roboMessage = getRoboMessage(numberinput)

    $(".output").text(roboMessage);
  })
})