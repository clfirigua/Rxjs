import{of} from 'rxjs'

const obs = of(1,2,3,4,5,6);

console.log('Inicio')

obs.subscribe({
    next:(next)=>console.log(next),
    error:(error)=>console.log(error),
    complete:()=>console.log('complete')
})

console.log('Fin')