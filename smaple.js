// https://qiita.com/cheez921/items/41b744e4e002b966391a
const promise = new Promise((resolve, reject) => {});

const p = new Promise((resolve) => {
    resolve();
}).then(() => {
    console.log("resolve!");
})

const p2 = new Promise((promise, reject) => {
    reject();
}).then(() => {
    console.log("resolve");
}).catch(() =>{
    console.log("reject");
});

global = 1;
const p3 = new Promise((p, r) => {
    if(global === 1){
        p();
    }else{
        r();
    }
}).then(() => {
    console.log("global === 1");
    return "global === 1";
}).catch(() => {
    console.log("global !== 1");
    return "global !== 1";
}).then((val) => {
    // then/catchでreturnした値を受け取る
    console.log(`then: ${val}`);
});

//////////////////////////

const aLB = (ms) => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    }).then(() => {
        console.log(`sorry! ${ms}ms wait!`);
    });
};

aLB(500);
aLB(1000);
aLB(750);

// async function
const asyncP = async(ms)=>{
    await new Promise((resolve)=> {
        setTimeout(()=>{
            resolve();
        }, ms);
    });
    console.log(`await sorry!${ms}wait!`);
};
asyncP(1500);
asyncP(2000);

async function PromiseAsync(ms){
    return new Promise((resolve, _) => {
        setTimeout(() =>{
            console.log(`await PromiseAsync ${ms} wait!`);
            resolve(ms);
        }, ms);
        //console.log(`await PromiseAsync ${ms} wait!`);
    });
}

async function main(){
    Promise.all([
        PromiseAsync(1000),
        PromiseAsync(3000),
        PromiseAsync(5000),
        PromiseAsync(4000),
        PromiseAsync(2000)
    ]).then((result) => {
        console.log(result);
    });
}

main();