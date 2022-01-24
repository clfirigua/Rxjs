import { endWith, of, startWith, subscribeOn } from 'rxjs';



const numeros$ = of(1,2,3).pipe(
    startWith('hola','hola2'), //primer valor emitido

    endWith('chao') // ultimo valor emitido
);

numeros$.subscribe(console.log)