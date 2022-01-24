import { ajax } from 'rxjs/ajax';

const url = `https://httpbin.org/delay/1`;


// ajax.put(url,{
//      nombre:'carlos',
//      apellido:'Firigua-contreras'
// },{
//     'mi-token':'Abv125a51s1s5'
// }).subscribe(console.log)

// otra forma

ajax({
    url,
    method:'POST',
    headers:{
        'miToken':'Carlos andres',
        
    },
    body:{
        id:1,
        password:'Calors andres firigua'
    }
}).subscribe(console.log)