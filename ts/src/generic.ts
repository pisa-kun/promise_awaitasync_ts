//https://www.buildinsider.net/web/pronamatypescript/03

class List<T>{
    private data: T[];
    constructor() {
        this.data = [];
    }

    // 引数itemの型を型変数Tとして宣言
    public add(item: T): void{
        this.data.push(item);
    }

    // 戻り値の型を型変数Tとして宣言
    public get(index: number): T{
        return this.data[index];
    }
}

let dataList = new List<Date>();
dataList.add(new Date());
let d = dataList.get(0);
console.log(d);

let nameList = new List<string>();
nameList.add("I love coffee");
nameList.add("HogeHoge purin");
console.log(nameList.get(0), nameList.get(1));