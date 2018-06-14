








$(document).ready(function() {
  $("#blanks").submit(function(event) {
    var item1Input = $("input#item1").val();
    var item2Input = $("input#item2").val();

    $("#list-item1").append(item1Input);
    $("#list-item2").append(item2Input);
    $(".list").show();
    event.preventDefault();
  });
});
