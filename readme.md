##

#### 環境構築
https://qiita.com/Yuki-Kurita/items/5e449e2c05aaeeef80ac

#### 非同期処理
1. 非同期処理関数はコールバック関数を受け取る高階関数にする
2. 利用者は「終わったら実行したい処理」をコールバック関数として渡す
3. 非同期処理関数は処理が終わったらコールバック関数を呼び出す

- setTimeout
    - 非同期処理
    - 引数でコールバック関数を受け取る(console.log)
    - 第二引数のms秒待機後、第一引数を実行する

#### Promise
https://sbfl.net/blog/2016/07/13/simplifying-async-code-with-promise-and-async-await/


#### await/async

thenで待機していた部分を同期的に記述できる。
しかし、トップレベルでは使えないので注意。