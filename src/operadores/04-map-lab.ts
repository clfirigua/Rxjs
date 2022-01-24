import { fromEvent, map } from "rxjs";
import { tap } from 'rxjs/operators';

const texto = document.createElement('div');

texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nisi dolore natus similique cupiditate qui dolor rem corrupti. Et maiores assumenda officia! Repudiandae animi, officia a cupiditate soluta blanditiis amet commodi at recusandae ea error sequi numquam iusto. Incidunt fugiat cupiditate perferendis dolore quia omnis eaque, tempore distinctio officiis commodi?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nisi dolore natus similique cupiditate qui dolor rem corrupti. Et maiores assumenda officia! Repudiandae animi, officia a cupiditate soluta blanditiis amet commodi at recusandae ea error sequi numquam iusto. Incidunt fugiat cupiditate perferendis dolore quia omnis eaque, tempore distinctio officiis commodi?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nisi dolore natus similique cupiditate qui dolor rem corrupti. Et maiores assumenda officia! Repudiandae animi, officia a cupiditate soluta blanditiis amet commodi at recusandae ea error sequi numquam iusto. Incidunt fugiat cupiditate perferendis dolore quia omnis eaque, tempore distinctio officiis commodi?`;

const body = document.querySelector('body');
body.append(texto);

const progresBar = document.createElement('div');
progresBar.setAttribute('class', 'progress-bar')

body.append(progresBar);


// Funcion que haga calculo
const calcularPorcentaje = (event) =>{
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return (scrollTop/ (scrollHeight - clientHeight)) *100;
}

// streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentaje(event))
    map(calcularPorcentaje),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progresBar.style.width = `${porcentaje}%`
})