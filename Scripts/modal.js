$( document ).ready(function() {
  // Get the modal
  var modal = document.getElementById('myModal');

// Get the button that opens the modal
  var btn = document.getElementById("submitMailBtn");

// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  var replyToValue = document.getElementsByName('Email').value;
  var fromNameValue = document.getElementsByName('Name').value;
  var messageHtmlValue = document.getElementsByName('Message').value;

  var serviceId = "myGmailService";
  var templateId = "template_6BkEijYR";
  var userId = "user_8yK59napehDiYt2SEfsf6";

  var data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: userId,
    template_params: {
      "reply_to": $`replyToValue`,
      "from_name": $`fromNameValue`,
      "message_html": $`messageHtmlValue`
    }
  };

  $("#submitMailBtn").click(function () {
    console.table(data);
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function () {
      alert('Your mail is sent!');
    }).fail(function (error) {
      alert('Oops... ' + JSON.stringify(error));
    });
  });

});

