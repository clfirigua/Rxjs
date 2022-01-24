import { fromEvent, map, sampleTime } from 'rxjs';


const clic$ = fromEvent<PointerEvent>(document, 'click');



clic$.pipe(
    map(({x,y})=>({x,y})),
    sampleTime(2000)
).subscribe(console.log)