import {interval, timer} from  'rxjs';
const observer = {
    next:(valor)=>console.log('Next'+ valor),
    complete: () => console.log('complete') 
}

const hoyen5 = new Date();
hoyen5.setSeconds(hoyen5.getSeconds()+5);
const interval$ = interval(1000);
// const timer$ = timer(2000);
const timer$ = timer(hoyen5)

console.log('inicio')
// interval$.subscribe(observer)
timer$.subscribe(observer)
console.log('Fin')