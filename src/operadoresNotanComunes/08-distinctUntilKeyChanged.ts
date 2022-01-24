import { of, from } from 'rxjs';
import {distinct, distinctUntilChanged, distinctUntilKeyChanged} from 'rxjs/operators'

interface Personaje {
    nombre:string;
}


const personajes: Personaje[] = [
    {
        nombre:'Mega Man'
    },
    {
        nombre:'Hiron Man'
    },
    {
        nombre:'Mega Man'
    },
    {
        nombre:'Mega Man'
    }
]

from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(console.log)