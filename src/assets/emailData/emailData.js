import Papa  from "papaparse";

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
    let localStorageKey = 'uniqueNumber';
    
    async function getTxt() {
      const res = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vR_qhauwP8thOL0IeJzNv0EhUS41UmuhqoBaqrDyXcyI-10r5LhFiDUh95IzRTP9xVeDm9B9fdDEYJn/pub?gid=0&output=csv");
      const data = await res.text();
      const parsed = await new Promise((resolve, reject) => {
        Papa.parse(data, { header: true, complete: (result) => resolve(result.data), error: reject })
      })
    
      console.log(parsed);
    
      return parsed;
    }
    
    async function postDataIfUnique(ip, uniqueNumber) {
      const formData = new FormData();
      formData.append('Id', ip);
      formData.append('UniqueNumber', uniqueNumber);
    
      const parsed = await getTxt();
      const exists = parsed.some(obj => obj.UniqueNumber === uniqueNumber);
    
      if (!exists) {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbym0IKlXlghRF3JcG74LTPCk2Xo0ibINEzRNwv8y1WBjHeYTOUS6kWINdUYPO43M4sE/exec';
    
        await fetch(scriptURL, { method: 'POST', body: formData })
          .then(response => {
            console.log('Success!', response);
            // guardar el uniqueNumber en el almacenamiento local del navegador
            localStorage.setItem(localStorageKey, uniqueNumber);
          })
          .catch(error => console.error('Error!', error.message));
      } else {
        console.log(`El objeto con UniqueNumber ${uniqueNumber} ya existe en la matriz.`);
      }
    }
    
    // obtener el valor del uniqueNumber guardado en el almacenamiento local del navegador
    let storedUniqueNumber = localStorage.getItem(localStorageKey);
    
    // si el valor existe, utilizarlo en lugar de calcular uno nuevo
    if (storedUniqueNumber) {
      uniqueNumber = storedUniqueNumber;
    }
    
    postDataIfUnique(ip, uniqueNumber);
}



/* formDatab.append('Id', ip);
formDatab.append('UniqueNumber', uniqueNumber); */