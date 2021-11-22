async function helloWorld(){
    const promise = new Promise((resolve, _) => {
        console.log("timer start");
        setTimeout(()=>{
            // long task!
            resolve(`Hello World`);
        },3000);
    });
    const hw = await promise;
    // promiseがresolveしたあとに返り値を受けとって表示
    console.log(hw);

//     let hw;
// promise.then((result) => hw = result)
//        .then(() => console.log(hw));
}

helloWorld();