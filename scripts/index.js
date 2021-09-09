//Form validation with jQuery validate API
$(function() {
  $("form[name='contact-info']").validate({
    rules: {
      name: "required",
      address: "required",
      email: {
        required: true,
        email: true
      },
      zip: {
        required: true,
        minlength: 5,
      }
    },
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address",
      address: "Please enter your address",
      zip: {
        minlength: 'Zip code must be at least 5 characters long'
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});

function getData() {
  var name = $('#name').val();;
  var email = $('#email').val();
  var address = $('#address').val();
  var city = $('#city').val();
  var state = $('#state').val();
  var zip = $('#zip').val();

  sessionStorage.setItem("name", name);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("address", address);
  sessionStorage.setItem("city", city);
  sessionStorage.setItem("state", state);
  sessionStorage.setItem("zip", zip);
}
