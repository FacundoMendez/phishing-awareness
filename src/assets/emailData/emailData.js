import Papa  from "papaparse";

export default function emailData (){

    const formData = new FormData();
    let incrementalNumber = 1;
    
    formData.append('Id', "id");
    
    // Obtener el último número y guardarlo en el localStorage
    async function getTxt() {
      const res = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vR_qhauwP8thOL0IeJzNv0EhUS41UmuhqoBaqrDyXcyI-10r5LhFiDUh95IzRTP9xVeDm9B9fdDEYJn/pub?gid=0&output=csv");
      const data = await res.text();
      const parsed = await new Promise((resolve, reject) => {
        Papa.parse(data, { header: true, complete: (result) => resolve(result.data), error: reject })
      })
    
      let lastNumber = parseInt(parsed[parsed.length - 1].UniqueNumber, 10);
      lastNumber = lastNumber > 1 ? lastNumber + 1 : lastNumber;
      incrementalNumber = lastNumber;
    
      localStorage.setItem("idNumber", incrementalNumber);
      console.log(incrementalNumber);
    
      return parsed;
    }
    
    // Agregar el número guardado en el localStorage al formulario
    async function postDataIfUnique() {
    
      // Obtener el número guardado en el localStorage
      const uniqueNumber = localStorage.getItem("idNumber");
    
      // Actualizar el valor del UniqueNumber en el formulario con el número guardado en el localStorage
      formData.set('UniqueNumber', uniqueNumber);
    
      const scriptURL = 'https://script.google.com/macros/s/AKfycbym0IKlXlghRF3JcG74LTPCk2Xo0ibINEzRNwv8y1WBjHeYTOUS6kWINdUYPO43M4sE/exec';
    
      await fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
          console.log('Success!', response);
        })
        .catch(error => console.error('Error!', error.message));
    
    }
    
    // Llamar a postDataIfUnique() solo después de que se complete la operación de obtener y guardar el número en el localStorage
    getTxt().then(() => {
      postDataIfUnique();
    });
}



/* formDatab.append('Id', ip);
formDatab.append('UniqueNumber', uniqueNumber); */