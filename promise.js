// console.log("1st");

// setTimeout(() => {
//     console.log("2nd(after 1sec");
// }, 1000);

// console.log("3rd");

// -----------------
console.log("1st");

new Promise((resolve)=> {

    setTimeout(() => {
        console.log("2nd(after 1sec)");
        // finish process call
        resolve();
    }, 1000);
}).then(()=>{
    // afterpromiss
    console.log("3rd");
});
