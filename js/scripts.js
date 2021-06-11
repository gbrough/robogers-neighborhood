$(document).ready(function(){
  $("form#number-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#number-passage").val();

    $("#total-count").html(wordCount);

  });
});