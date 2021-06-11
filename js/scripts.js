function getRoboMessage(numberinput) {
  let roboMessage = "something"

  if (numberinput = 0) {
    roboMessage = "hello"
  } else if (numberinput = 1) {
    roboMessage = 'world'
  } else {
    roboMessage = "not today"
  }
  return roboMessage;
}

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault()
    const numberinput = parseInt($("input#number-input").val());
    const roboMessage = getRoboMessage(numberinput)

    $(".output").text(output);
  })
})