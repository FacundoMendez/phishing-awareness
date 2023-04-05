import axios from 'axios';

export default function emailData (){

    let ip = window.location.host;

    function hashCode(str) {
      let hash = 0;
      if (str.length == 0) {
        return hash;
      }
      for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
      }
      return hash;
    }
    
    let uniqueNumber = hashCode(ip);

    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;
      console.log(ipAddress);
      // haz lo que necesites con la dirección IP
    })
    .catch(error => {
      console.error('Error al obtener la dirección IP:', error);
    });
    
    
    const formDatab = new FormData();
    formDatab.append('Id', ip);
    formDatab.append('UniqueNumber', uniqueNumber);


    const scriptURL = 'https://script.google.com/macros/s/AKfycbym0IKlXlghRF3JcG74LTPCk2Xo0ibINEzRNwv8y1WBjHeYTOUS6kWINdUYPO43M4sE/exec'

      fetch(scriptURL, { method: 'POST', body: formDatab})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
}



