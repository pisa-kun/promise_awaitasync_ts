let func1 = function(x: number, y: number): number{
    return x + y;
}

let func2 = (x: number, y: number) => x + y;

console.log(func1(2,3), func2(3,4));

function func3(x: number, y: number, f: (a: number, b: number)=> number): number{
    return f(x, y);
}

let logic: (a: number, b: number) => number;
logic = (a, b) => a * b;
let r = func3(2,3, logic);
console.log(r);

console.log(func3(3, 3.14, (r, pi)=> r * r * pi));