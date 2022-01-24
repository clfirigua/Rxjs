import { fromEvent, interval } from "rxjs";
import { concatMap, take } from 'rxjs/operators';

//espera que se termina uno para ejecutar el sigiente

const click$ = fromEvent(document, 'click');
const interval$ = interval(500).pipe(take(3));

click$.pipe(
    concatMap(()=> interval$)
).subscribe(console.log)