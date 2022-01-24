import { endWith, startWith } from "rxjs";
import { ajax } from "rxjs/ajax";



const loudingdiv = document.createElement('div');
loudingdiv.classList.add('loading');

loudingdiv.innerHTML = 'Cargando...';

const body = document.querySelector('body');

//stream

ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
    startWith(true),

    // endWith(false)
).subscribe(
    resp => {
        if(resp === true){
            body.append(loudingdiv)
        }else{
            body.querySelector('.loading').remove()
        }
        console.log(resp)
    }
)