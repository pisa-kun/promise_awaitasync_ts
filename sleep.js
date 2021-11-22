//https://dev.classmethod.jp/articles/explain-promise-and-async-await-for-primary-javascript/

function sleep(sec){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`wait: ${sec} sec`);
            // return value
            resolve(sec);
        }, sec * 1000);
    });
}

function main(){
    Promise.all([
        sleep(5),
        sleep(3),
        sleep(1),
        sleep(2),
        sleep(4),
    ]).then((result) => {
        console.log(result);
    });
}

main();