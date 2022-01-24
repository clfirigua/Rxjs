import { range, fromEvent } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';

// range(1,10).pipe(
//     first(x => x === 5)
// ).subscribe(console.log)

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    tap<PointerEvent>(()=>console.log('tap')),
    map(({clientX, clientY})=>({clientX,clientY})),
    first(event => event.clientY >= 150)
).subscribe({
    next: (valor)=> console.log('next:', valor),
    complete: ()=>console.log('Complete')
})