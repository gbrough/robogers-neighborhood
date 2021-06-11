const numberArray = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33"];
let newArray = []

function getRoboMessage(numberinput) {
  for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i].includes("3")) {
    newArray.push("Won't you be my neighbor?")
    } else if (numberArray[i].includes("2")) {
    newArray.push("Boop!")
    } else if (numberArray[i].includes("1")) {
    newArray.push("Beep!")
    } else {
     newArray.push(numberArray[i])
    }
  }
  return newArray.slice(0,numberinput+1);
}

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault()
    const numberinput = parseInt($("input#numberinput").val());
    const newArray = getRoboMessage(numberinput)
    $(".output").text(newArray);
  })
})