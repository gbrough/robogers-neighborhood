








$(document).ready(function(){
  $("form#number-message").submit(function(event){
    event.preventDefault();
    const numberentry = $("#number-input").val();
    const messageAnswer = wordCounter(numberentry);
    const numberWord = numberWordConverter(word, numberentry);
    $("#number-result").html(messageAnswer);
  });
});