$(document).ready(function(){
  $('#offer-form').on('submit', function(event) {
    if ($(this).valid()) {
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(data) {
        $('.success').html(data + ', Ваша форма отправлена');
      },
      error: function(jqXHR, textStatus) {
        console.log(jqXHR + ': ' + textStatus);
      }
    });
  }
  });
});