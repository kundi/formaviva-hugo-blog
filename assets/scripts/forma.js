$(document).ready(function() {
  $('form').submit(function(e) {
    if ($(this).find('input[name="user"]').val()) {
      var encoded = $("#encoded-content").text();
      var decoded = window.atob(encoded);
      $("#encoded-content").html(decoded).show();
      $(".form-access").hide();
    }
    e.preventDefault();
    return false;
  });
});
