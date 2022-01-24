import { debounceTime, fromEvent, map, pluck, asyncScheduler } from 'rxjs';
import { distinct, distinctUntilChanged, throttleTime } from 'rxjs/operators';


const click$ = fromEvent(document, 'click')


// click$.pipe(
//     throttleTime(3000)
// ).subscribe(console.log)


const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup' );


input$.pipe(
    pluck('target', 'value'),
    throttleTime(3000,asyncScheduler,{
        leading:true,
        trailing:true
    }),
    distinctUntilChanged(),
).subscribe(console.log)