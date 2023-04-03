import axios from 'axios';

export default function emailData (){
    
    var numero = Math.floor(Math.random() * (100000 - 0 + 1)) + 0
    
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
    })
   
}

