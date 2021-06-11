const numberArray = [0,1,2,3,4];

function getRoboMessage() {
  numberArray.forEach(function(element) {
    roboMessage = console.log(element)
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