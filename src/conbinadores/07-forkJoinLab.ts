import { of, interval, forkJoin } from 'rxjs';
import { delay, take } from 'rxjs/operators';


const numeros$ = of(1,2,3,4,5);
const interval$ = interval(1000).pipe(take(3));
const letras$ = of('a','b','c').pipe(delay(3));

forkJoin({numeros$,interval$,letras$}).subscribe(console.log)