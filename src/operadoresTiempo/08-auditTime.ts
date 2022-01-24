import { auditTime, fromEvent, map, tap } from "rxjs";



const click$ = fromEvent<PointerEvent>(document, 'click');


click$.pipe(
    tap(val=>console.log('tap')),
    map(({x,y}) => ({x,y})),
    auditTime(2000)
).subscribe(console.log)