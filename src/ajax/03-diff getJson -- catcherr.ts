import { ajax } from 'rxjs/ajax';

const url = `https://httpbin.org/delay/1`;

// ajax(url).subscribe(console.log)

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'aplication/json',
    'mi-token': 'ABC'
});

obs$.subscribe(data => console.log(data));