function clearArray() {
  return newArray = []
}

function getRoboMessage(numberinput) {
  for (i = 0; i <= numberinput; i++) {
    if (i.toString().includes("3")) {
    newArray.push("Won't you be my neighbor?")
    } else if (i.toString().includes("2")) {
    newArray.push("Boop!")
    } else if (i.toString().includes("1")) {
    newArray.push("Beep!")
    } else {
     newArray.push(i)
    }
  }
  return newArray ;
}

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault()
    const numberinput = parseInt($("input#numberinput").val());
    const newArray = getRoboMessage(numberinput)
    $(".output").text(newArray);
    });
});