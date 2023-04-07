/* import Papa  from "papaparse";

export default function emailData (){

    const formData = new FormData();
    let incrementalNumber = 0
    let lastNumber = 0; // Definimos la variable aquí para que sea global
    


    async function getTxt() {
        const res = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vR_qhauwP8thOL0IeJzNv0EhUS41UmuhqoBaqrDyXcyI-10r5LhFiDUh95IzRTP9xVeDm9B9fdDEYJn/pub?gid=0&output=csv");
        const data = await res.text();
        const parsed = await new Promise((resolve, reject) => {
          Papa.parse(data, { header: true, complete: (result) => resolve(result.data), error: reject })
        });

      
        const id = "id";
        let newNumber;
      
        const idNumber = localStorage.getItem("idNumber");
        if (idNumber) {
          newNumber = parseInt(idNumber);
        } else {
        const maxNumber = Math.max(...parsed.map(row => parseInt(row.UniqueNumber)));
          newNumber = maxNumber + 1;
          localStorage.setItem("idNumber", newNumber);
        }
      
        formData.append('Id', id);
        formData.append('UniqueNumber', newNumber);
      }
      
        async function postDataIfUnique() {
            const idNumber = localStorage.getItem("idNumber");
            if (!idNumber) {
              await getTxt();
            } else {
              formData.append('Id', 'id');
              formData.append('UniqueNumber', idNumber);
            }
            
            const scriptURL = 'https://script.google.com/macros/s/AKfycbym0IKlXlghRF3JcG74LTPCk2Xo0ibINEzRNwv8y1WBjHeYTOUS6kWINdUYPO43M4sE/exec';
            
            await fetch(scriptURL, { method: 'POST', body: formData })
              .then(response => {
                console.log('Success!', response);
              })
              .catch(error => console.error('Error!', error.message));
          }
      
      postDataIfUnique();
}
 */


/* formDatab.append('Id', ip);
formDatab.append('UniqueNumber', uniqueNumber); */