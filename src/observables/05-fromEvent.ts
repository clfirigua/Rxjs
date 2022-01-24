import {fromEvent} from 'rxjs'

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');


const observe = {
    next: (v)=>console.log(v)
}

src1$.subscribe(observe)
src2$.subscribe(evento => console.log(evento.key))