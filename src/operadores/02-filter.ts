import {range,of, from, fromEvent } from 'rxjs';
import {filter, map} from 'rxjs/operators';

// range(1,10).pipe(
//     filter(va => va % 2 === 1)
// ).subscribe(console.log)
interface Personaje {
    tipo: string;
    nombre: string;
}
const personajes:Personaje[] = [
    {
        tipo:'heroe',
        nombre:'superman'
    },
    {
        tipo:'villano',
        nombre:'joker'
    },
    {
        tipo:'heroe',
        nombre:'Robin'
    }
]

// from(personajes).pipe(
//     filter(valor => valor.tipo  === 'heroe')
// ).subscribe(console.log)

const tecla$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(evento => evento.code),
    filter(key => key === 'Enter')
)

tecla$.subscribe(console.log)