// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // return value foo, 1sec 
        console.log("first value is foo");
        resolve('foo');
    }, 1000);
});

myPromise
.then(v => {return v + "bar";})
.then(v => {return v + "zoo";})
.then(v => {return v + "faa";})
.then(v => console.log(v))
.catch(v => error(v));