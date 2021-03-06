import { fromEvent, interval } from "rxjs";
import { concatMap, exhaustMap, take } from 'rxjs/operators';

//espera que se termina uno para ejecutar el sigiente

const click$ = fromEvent(document, 'click');
const interval$ = interval(500).pipe(take(3));

click$.pipe(
    exhaustMap(()=> interval$)
).subscribe(console.log)