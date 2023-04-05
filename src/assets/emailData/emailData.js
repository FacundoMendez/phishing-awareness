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
    
// Crea una solicitud POST para enviar la dirección IP y el número único a Google Sheets
fetch("https://script.google.com/macros/s/AKfycbwn5YlYX4ACNnzdrhfOAUc8g3ArEP0hoRMHDgzg-NkiINkoIb5f5NdbpoBvo0W325R7/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    ID: ip,
    UniqueNumber: uniqueNumber
  })
})
.then(response => response.text())
.then(data => console.log(data))

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
   

