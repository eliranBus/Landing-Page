//remove placeholder on focus

$('input').focus(function () {
  $(this).data('placeholder', $(this).attr('placeholder'))
    .attr('placeholder', '');
}).blur(function () {
  $(this).attr('placeholder', $(this).data('placeholder'));
})

//form validation

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}



function validation() {
  var validated = true;

  var email = $("#email").val();
  var name = $("#name").val();
  $("#name").next().text("");
  $("#email").next().text("");

  if (name == '' || name == "null" || name.length < 2) {
    $("#name").next().text("* Name must be at least 2 chars");
    name == 'name';
    validated = false;
  } else if (!validateEmail(email)) {
    $("#email").next().text("* please add a valid email");
    $('#email').val() == 'email';
    validated = false;
  }

  if (validated == false) {
    return false;
  } else {
    window.open("thanks.html", "_self");
  }

}

$("#contact-btn").on("click", validation);