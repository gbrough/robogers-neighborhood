function getRoboMessage(numberinput) {
  let roboMessage = ""

  if (numberinput === 1) {
    roboMessage = "Beep"
  } else if (numberinput === 2) {
    roboMessage = "Boop"
  } else {
    roboMessage = "Won't you be my neighbor?"
  }
  return roboMessage;
}

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault()
    const numberinput = parseInt($("input#numberinput").val());
    const roboMessage = getRoboMessage(numberinput)

    $(".output").text(roboMessage);
  })
})