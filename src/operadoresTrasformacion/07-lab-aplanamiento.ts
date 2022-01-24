import { fromEvent, mergeMap, catchError, of, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, pluck, tap, exhaustMap } from 'rxjs/operators';

const url:string = 'https://reqres.in/'
//helper

const httpLogin = (userPass) => ajax.post(url+'api/login?delay=1', userPass).pipe(
    pluck('response', 'token'),
    catchError(err => of({}))
)


//creando formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// configuraciones

inputEmail.type = 'email',
inputEmail.placeholder = 'Email'
inputEmail.value = 'eve.holt@reqres.in';


inputPass.type = 'password',
inputPass.placeholder = 'Password'
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar'

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form)


//stremas
const submitForm$ = fromEvent<SubmitEvent>(form, 'submit').pipe(
    tap(ev => ev.preventDefault()),
    map( ev => ({
        email: ev.target[0].value,
        password:ev.target[1].value
    })),
    // mergeMap(httpLogin)
    // switchMap(httpLogin)
    exhaustMap(httpLogin)
);

submitForm$.subscribe(console.log)




