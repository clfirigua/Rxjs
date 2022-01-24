import { combineLatest, fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

//Dom
const input1 = document.createElement('input');
input1.placeholder = '@gmail.com';
const input2 = document.createElement('input');
input2.placeholder = '@gmail.com';
//insercion en el HTML
document.querySelector('body').append(input1,input2);
//Helpers

const getInputStream = (element:HTMLElement) =>{
    return fromEvent(element, 'keyup').pipe(
        pluck('target', 'value')
    )
}

combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log)















// const keyup = fromEvent(document, 'keyup');
// const click = fromEvent(document, 'click');

// combineLatest(keyup,click).subscribe(console.log)