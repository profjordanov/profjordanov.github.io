$(document).ready(function() {
  const modal = document.getElementById('myModal');
  const btn = document.getElementById('submitMailBtn');
  const span = document.getElementsByClassName('close')[0];

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  $("#submitMailBtn").click(function() {
    const replyToValue = $('#replyTo').val();
    const fromNameValue = $('#fromName').val();
    const messageHtmlValue = $('#messageHtml').val();

    const serviceId = 'myGmailService';
    const templateId = 'template_6BkEijYR';
    const userId = 'user_8yK59napehDiYt2SEfsf6';
    const emailJsUrl = 'https://api.emailjs.com/api/v1.0/email/send';

    let data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        'reply_to': `${replyToValue}`,
        'from_name': `${fromNameValue}`,
        'message_html': `${messageHtmlValue}`
      }
    }

    $.ajax(emailJsUrl, {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function() {
      modal.style.display = 'block';
    }).fail(function(error) {
      alert('Oops... ' + JSON.stringify(error));
    });
  });

});