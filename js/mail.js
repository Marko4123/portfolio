$("form").on("submit", function (e) {
  e.preventDefault();
  var user_name = $("#user_name").val();
  var user_email = $("#user_email").val();
  var user_number = $("#user_number").val();
  var user_message = $("#user_message").val();
  $.ajax({
    method: "POST",
    url: "https://formsubmit.co/ajax/4c8a10debab8d0a9ac80c7f788c2fc9e",
    dataType: "json",
    accepts: "application/json",
    data: {
      name: user_name,
      email: user_email,
      number: user_number,
      message: user_message,
    },
    success: function (data) {
      $("#stage").text(
        "Thank you for contacting us. We will get back to you shortly."
      );
    },
  });
});

