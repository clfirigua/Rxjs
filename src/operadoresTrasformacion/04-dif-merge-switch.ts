import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

const click = fromEvent(document, 'click' );
const interval$ = interval(1000);

//mantiene toda las emisiones que quiera
click.pipe(
    mergeMap(()=>interval$)
).subscribe(console.log)

//mantiene la ultima emicion de datos
click.pipe(
    switchMap(()=>interval$)
).subscribe(console.log)