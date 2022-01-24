import { interval, of } from "rxjs";
import { map, mergeMap, take } from "rxjs/operators";



const letras = of('a', 'b', 'c');
letras.pipe(
    mergeMap((letra)=> {
        return interval(1000).pipe(
            map(i =>  letra + i),
            take(3)
            );
    })
).subscribe({
    next:(v)=>console.log(v),
    complete:()=>console.log('complete')
})