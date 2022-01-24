import {asyncScheduler} from 'rxjs';

const data = {
    nombre:'carlos'
}

const saludar = () => console.log('Hola que haces');
const saludar2 = (nombre) => console.log('Hola que haces' + nombre);
const saludar3 = (obj) => console.log('Hola que haces' + obj.nombre);

// asyncScheduler.schedule(saludar, 3000)
// asyncScheduler.schedule(saludar2, 3000, 'Carlos')
// asyncScheduler.schedule(saludar3, 3000, data)

const sub$ = asyncScheduler.schedule(function(state){
    console.log('Statet'+ state);
    this.schedule(state+1,1000)
},3000, 0)

// setTimeout(() => {
//     sub$.unsubscribe()
// }, 6000);

asyncScheduler.schedule(()=>{
    sub$.unsubscribe()
},6000);