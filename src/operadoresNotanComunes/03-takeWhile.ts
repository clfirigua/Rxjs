import {  fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';


const click$ = fromEvent<PointerEvent >(document, 'click');


click$.pipe(
    map(({x,y})=>({x,y})),
    //muestra el valor que termina el observable
    takeWhile(({y}) => y<= 150, true)

).subscribe({
    next:(v)=> console.log('next', v),
    complete:()=>console.log('complete')
});