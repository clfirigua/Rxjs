import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';
// funcioncion reduce
const totalReduce = (acumulador:number, valorActual:number) =>{
    return acumulador+valorActual
}

interval(1000).pipe(
    take(3),
    tap(console.log),
    reduce(totalReduce,5)
)
.subscribe({
    next:(val)=>console.log(val),
    complete:()=> console.log('Complete')
})