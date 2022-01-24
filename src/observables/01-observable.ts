import{Observable, Observer, Subscriber} from 'rxjs'

const observer:Observer<any> ={
    next:value => console.log('siguiente' + value),
    error: error=> console.warn('error' + error),
    complete:()=> console.log('complete')
}

// const obs$ = Observable.create(); es una forma de crear no es usual

const obs$ = new Observable<string>(suscriber =>{

    suscriber.next('hola');
    suscriber.next('Mundo');

    const a = undefined;
    a.nombre = 'fernado'

    suscriber.complete();

    suscriber.next('Termina de emitir los datos');

});

// es una forma de tomar los datos del observable
// obs$.subscribe(
//     valor => console.log('Valor' + valor),
//     error => console.error('error'+ error),
//     () => console.log('completeda')
// )

obs$.subscribe(observer)