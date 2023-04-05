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
    
    // Crea una solicitud POST para enviar la dirección IP a Google Sheets
    // Crea una solicitud POST para enviar la dirección IP a Google Sheets
    fetch(`https://script.google.com/macros/s/AKfycbx3zH1tgyGXiAp3NcPaQvaPxuZ1HTlMPf_13OdAy6bVseTY5YKGNhcTdFBKxgtngRLk/exec?ip=${ip}&uniqueNumber=${uniqueNumber}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    }





   /*  var numero = Math.floor(Math.random() * (100000 - 0 + 1)) + 0
    
    var data = {
        service_id: 'service_fv51ia9',
        template_id: 'template_3663h3f',
        user_id: 'aD2ScZKgaRSUBju0w',
        template_params: {
            'id': numero,
            'g-recaptcha-response': ''
        }
    };

    axios.post('https://api.emailjs.com/api/v1.0/email/send', JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json'
        }
    }) */
   

