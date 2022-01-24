import {range} from 'rxjs'
import {map, tap} from 'rxjs/operators'

const numeros$ = range(1,5);


numeros$.pipe(
    tap(x => console.log('antes', x)),
    map(val=> val*10)
).subscribe(val => console.log(val))
