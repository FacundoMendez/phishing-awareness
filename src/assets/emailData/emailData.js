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

const formDatab = new FormData();
formDatab.append('Id', ip);
formDatab.append('UniqueNumber', uniqueNumber);

const scriptURL = 'https://script.google.com/macros/s/AKfycbym0IKlXlghRF3JcG74LTPCk2Xo0ibINEzRNwv8y1WBjHeYTOUS6kWINdUYPO43M4sE/exec'

// Realiza una llamada GET para obtener los datos existentes en la base de datos.
fetch(scriptURL)
  .then(response => response.json())
  .then(data => {
    // Comprueba si el uniqueNumber ya se encuentra en la base de datos.
    if (data.some(item => item.UniqueNumber === uniqueNumber)) {
      console.log('El uniqueNumber ya existe en la base de datos');
      // No envíes los datos POST.
    } else {
      // Envía los datos POST.
      fetch(scriptURL, { method: 'POST', body: formDatab})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    }
  })
  .catch(error => console.error('Error!', error.message))
}



