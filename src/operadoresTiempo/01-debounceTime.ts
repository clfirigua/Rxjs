import { debounceTime, fromEvent, map, pluck } from "rxjs";
import { distinct, distinctUntilChanged } from 'rxjs/operators';


const click$ = fromEvent(document, 'click')


click$.pipe(
    debounceTime(3000)
);//.subscribe(console.log)


const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup' );


input$.pipe(
    // map(key => key.target.value)
    pluck('target', 'value'),
    debounceTime(3000),
    distinctUntilChanged(),
).subscribe(console.log)