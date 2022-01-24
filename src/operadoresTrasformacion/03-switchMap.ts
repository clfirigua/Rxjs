import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { switchMap } from "rxjs/operators";
const url = 'https://httpbin.org/delay/1?q='
const letras$ = of('a','b','c', 'd');


letras$.pipe(
    switchMap(texto => ajax.getJSON(url+texto))
).subscribe(console.log)
