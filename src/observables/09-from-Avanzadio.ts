import {of, from} from 'rxjs';

const observer={
    next:val=>console.log('next:', val),
    complete: ()=>console.log('Complete')
}
//  const source$ = from([1,2,3,4,5]);
//  const source$ = of([1,2,3,4,5]);
 const source$ = from(fetch('https://api.github.com/users/klerith'));
 source$.subscribe(async(resp)=>{
     const data = await resp.json();
     console.log
 })
// source$.subscribe(observer)

