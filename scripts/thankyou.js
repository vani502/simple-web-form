$( document ).ready(function() {
  var name = sessionStorage.getItem("name");
  var email = sessionStorage.getItem("email");
  var address = sessionStorage.getItem("address");
  var city = sessionStorage.getItem("city");
  var state = sessionStorage.getItem("state");
  var zip = sessionStorage.getItem("zip");

  $('#txtname').html(name);
  $('#txtemail').html(email);
  $('#txtaddress').html(address);
  $('#txtcity').html(city);
  $('#txtstate').html(state);
  $('#txtzip').html(zip);

  console.log(name, email, address, city, state, zip);
});
