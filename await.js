
function sleep(sec){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`wait: ${sec} sec`);
            // return value
            resolve(sec);
        }, sec * 1000);
    });
}

function raise(){
    return new Promise((_, reject)=> {
        reject(new Error("failed"));
    });
}

// async f
async function sum(a, b){
    return a + b;
}

async function main(){
    const sec = await sleep(2);
    console.log(`result: ${sec} sec`);
    try{
        await raise();
    }catch( e){
        console.log(`error: ${e}`);
    }
    const not_await = sum(1,2);
    console.log(`not await: ${not_await}`);
    const did_await = await sum(2,3);
    console.log(`did await: ${did_await}`);
}

main();