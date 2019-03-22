$(document).ready(function() {
  $('#input').submit(function() {
    let city = $('#location').val();
    $('#location').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${"Portland"}&appid=[API-KEY-GOES-HERE]`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('result').text(`These doctors in Portland can help with that: ${doctors}`);
      $('.result').text(`Doctors named "name" in Portland: ${doctors}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
