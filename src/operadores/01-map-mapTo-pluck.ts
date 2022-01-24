import {fromEvent, range} from 'rxjs'
import {map, mapTo, pluck} from 'rxjs/operators'

// range(1,5)
// .pipe(
//     map<number, string>(val => (val*10).toString())
// )
// .subscribe(console.log)
const letras$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    // map(evento => evento.code )
    // pluck('key')
    // pluck('target', 'baseURI')
    mapTo('Tecla precionada')
)



letras$.subscribe(val=>console.log(val))