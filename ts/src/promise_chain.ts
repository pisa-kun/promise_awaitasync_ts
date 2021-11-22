// function printAsync(text: string, delay: number) :Promise<unknown>{
//     let p = new Promise((resolve, _)=> {
//         setTimeout(() => {
//             console.log(text);
//             resolve(0);
//         }, delay);
//     });
//     return p;
// }

let printAsync = (text: string, delay: number) => {
    let p = new Promise((resolve, _)=> {
        setTimeout(() => {
            console.log(text);
            resolve(0);
        }, delay);
    });
    return p;
}

printAsync(`hello`, 500)
    .then(() => printAsync(`world`, 500))
    .then(() => printAsync(`delay`, 500))
    .then(() => printAsync(`chain`, 500));