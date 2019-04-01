export class APIDoctor {
  doctorInfo(sickInput,doctorInput) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?last_name=${doctorInput}&query=${sickInput}&location=or-portland&sort=best-match-asc&skip=0&limit=20&user_key=9c0c734f504dc68cfe5db26fcfae17c1`;

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
     }
   }
