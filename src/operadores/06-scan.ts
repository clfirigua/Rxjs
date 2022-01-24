import { reduce, from, scan } from 'rxjs';
import { formatDiagnostic } from "typescript";

const numero = [1,2,3,4,5];

// const total = (acc, cur) =>{
//     return acc+cur
// }

const total = (acc, cur) => acc+cur;

from(numero).pipe(
    // reduce(total, 0),
    scan(total  )
).subscribe(console.log)