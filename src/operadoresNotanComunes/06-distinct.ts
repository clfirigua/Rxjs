import { of, from } from 'rxjs';
import {distinct} from 'rxjs/operators'


const numero$ = of(1,2,1,3,4,5,6,1,2,8,9,10,11,12,15,85,21).pipe(
    distinct()
);

numero$.subscribe(console.log);

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
]

from(personajes).pipe(
    distinct(p => p.nombre)
).subscribe(console.log)