import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';


// $(document).ready(function(){
//   $('#submit').click(function() {
//     // event.preventDefault();
//     let promise = new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=45.512794%2C%20-122.679565&skip=0&limit=10&user_key=9c0c734f504dc68cfe5db26fcfae17c1`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//
//     promise.then(function(response) {
//       let body = JSON.parse(response);
//       $('.result').text(`These doctors in Portland can help with that: ${body.main}`);
//     }, function(error) {
//       $('.error').text(`There was an error processing your request: ${error.message}`);
//     });
//   });
// });
$(document).ready(function() {
  $('#submit').click(function() {
    // let city = $('#location').val();
    // $('#location').val("");
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=45.512794%2C%20-122.679565&skip=0&limit=10&user_key=9c0c734f504dc68cfe5db26fcfae17c1`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.result').text(`The humidity in is ${response.main}%`);
      },
      error: function() {
        $('.error').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
