import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-userss.interface';



// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

//helpers

const mostrarUsuarios =(usuarios:any)=> {
    
}

// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );


input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(event => event.target['value']),
    map<string, Observable<GithubUsersResp>>( texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${ texto }`
    )),
    mergeAll<any>(),
    pluck('items')
).subscribe( console.log );

