import {interval, fromEvent } from 'rxjs';
import { skip, takeUntil } from 'rxjs/operators';


const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);


const counter$ = interval(1000);
const clickBtn$ = fromEvent(document, 'click').pipe(
    skip(3)
);

counter$.pipe(
    takeUntil(clickBtn$),
).subscribe({
    next:(v)=> console.log('Next', v),
    complete:()=> console.log('Complete')
})
