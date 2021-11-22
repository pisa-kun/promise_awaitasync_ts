//https://sbfl.net/blog/2016/07/13/simplifying-async-code-with-promise-and-async-await/

setTimeout(() => console.log(`hello`), 500);
console.log(`world`);

// function openFile(url: string, onload: (e: Event, xhr: XMLHttpRequest)=> void) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.addEventListener('load', (e) => onload(e, xhr));
//     xhr.send();
// }

// openFile('foo.txt', (event, xhr) => {
//    openFile('bar.txt', (event, xhr) => {
//      openFile('baz.txt', (event, xhr) => {
//          console.log('done!');
//      });
//    });
// });

// promise 
let promise = new Promise((resolve, _) => {
    setTimeout(() => {
        console.log('Hello');
        resolve(0); // Promise終了
    }, 2000);
});

// then は Promiseがresolveされたあとに登録された関数を呼ぶ。
let world = () => console.log(`World!`);
promise.then(world);

// resolveは値を受け取ることが可能
console.log("resolve function")
const p = new Promise((resolve, _) => resolve(`done`));
p.then((r)=> console.log(r));