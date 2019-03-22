$(document).ready(function() {
  $('#input').submit(function() {
    // event.preventDefault();
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&location=45.512794%2C%20-122.679565%2C20000&user_location=45.512794%2C%20-122.679565&skip=0&limit=10&user_key=
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
      $('.result').text(`These doctors in Portland can help with that: ${body.main}`);
      $('.result').text(`Doctors named "name" in Portland: ${doctors}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
