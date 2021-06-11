const numberArray = [0,1,2,3,4];


function getRoboMessage(numberinput) {
  for (let i = 0; i < numberArray.length; i++) {  
    if (i === 1) {
      roboMessage = "Beep!"
    } else if (i === 2) {
      roboMessage = "Boop!"
    } else if (i === 3) {
      roboMessage = "Won't you be my neighbor?"
    } else {
      roboMessage = console.log(i)
    }
  }
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