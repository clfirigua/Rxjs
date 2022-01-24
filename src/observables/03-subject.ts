import{Observable, Observer, Subject, Subscriber} from 'rxjs'

const observer:Observer<any> ={
    next:value => console.log('Next' + value),
    error: error=> console.warn('error' + error),
    complete:()=> console.log('completado')
}
const  intervalo$ = new Observable<number>(subs =>{

    const intervaId = setInterval(()=>{
        subs.next(Math.random())
    },1000);

    return ()=> {clearInterval(intervaId)
    console.log('Intervalo terminado')
    }
})

// const sub1 = intervalo$.subscribe(console.log)

const sub$ = new Subject(); 
const limpiar = intervalo$.subscribe(sub$);

const sub1 = sub$.subscribe(observer)
const sub2 = sub$.subscribe(observer)

setTimeout(()=>{
    sub$.next(10);
    sub$.complete();
    limpiar.unsubscribe()
},3500)