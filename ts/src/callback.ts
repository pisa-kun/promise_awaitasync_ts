// https://qiita.com/shundroid/items/8d453a7a7bc09c658893

function progressA(callback: (msg: string) => void){
    callback("hoge");
}

progressA(msg =>{
    console.log(msg);
})

// callback function
// https://sbfl.net/blog/2019/02/08/javascript-callback-func/
setTimeout(() => console.log("first call 4sec"), 4000);
setTimeout(function() :void{}, 3000);

const max1 = Math.max(3, 5, 2, 10); // max1 is value
const max2 = Math.max; // max2 is function type
console.log(max1, max2(3,5,7,10));

// setTimeout 高階関数
// arg1 func is callback, 
setTimeout(function(){
    console.log("second call 1sec");
}, 1000); 