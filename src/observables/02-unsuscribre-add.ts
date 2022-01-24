import{Observable, Observer, Subscriber} from 'rxjs'

const observer:Observer<any> ={
    next:value => console.log('Next' + value),
    error: error=> console.warn('error' + error),
    complete:()=> console.log('completado')
}

const intervalo$ = new Observable<number>(suscriber => {

    let cont = 0;
    setInterval(()=>{
        cont ++
        suscriber.next(cont)
    },1000)

})

intervalo$.subscribe(observer)