$(document).ready(function() {
  $(".happy-birthday").hide();
  $(".thank-you").hide();
})

$(".submit-button").on("click", function(e) {
  firstName = $(".fName").val().trim();
  lastName = $(".lName").val().trim();
  fullName = firstName + " " + lastName
  birthday = $(".birthday");

  console.log(firstName, lastName, fullName, birthday[0].value)
  
  if (birthday[0].value === "1988-06-10") {
    $(".form-input").hide();
    $(".thank-you").hide();
    $(".happy-birthday").show();
  } else {
    $(".form-input").hide();
    $(".thank-you").show();
  }
  

  $(".fullName").text(fullName)
})
