import { catchError, map, of } from 'rxjs';
import {ajax} from 'rxjs/ajax'


const url = 'https://api.github.com/users?per_page=5'

const fetchPromise = fetch(url);


ajax(url).pipe(
    map(resp => resp.response),
    catchError(err => {
        console.log(err)
        return of([])
    })
).subscribe(console.log)










//forma de hacerlo con JS

// fetchPromise
// .then( resp => resp.json())
// .then(console.log)
// .catch()


// const manejoErrores =(response:Response)=>{
//     if(!response.ok){
//         throw new Error(response.statusText)
//     }
//     return response
// };


// fetchPromise
// .then( manejoErrores)
// .then( resp => resp.json())
// .then(console.log)
// .catch()