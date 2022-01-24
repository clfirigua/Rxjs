import { of } from 'rxjs';
import { take } from 'rxjs/operators';

const numeros$ = of(1,2,3,4,5);
numeros$.pipe(
    take(2)
).subscribe({
    next:(v)=>console.log('valor', v),
    complete:()=> console.log('complete')
})