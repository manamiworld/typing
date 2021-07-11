'use strict';

{
    // 関数の設定
    function setWord() {
        // wordのランダム
        // splice；表示されたワードは削除していく
        word =words.splice(Math.floor(Math.random()*words.length),1)[0];
        target.textContent = word;
        // 現在の文字数（毎回リセットする）
        loc=0;
    }

    // タイプする単語
    const words =[
        'red',
        'blue',
        'pink',
    ];
    let word;
    let loc =0;
    let startTime
    let isPlaying = false;
    const target =document.getElementById('target');

    // クリックしたら始まる
    document.addEventListener('click',() => {
        if (isPlaying === true) {
            return;
        }

    // 時間をはかる(trueになったら測り始める)
        isPlaying = true;
        startTime = Date.now();
        setWord();
    });

    // タイプした文字を取得して不正解なら何も起きない
    document.addEventListener('keydown', e => {
        if(e.key !==word[loc]) {
            return;
        }
    // 正解ならアンダーバーは増える
    loc++;
    // repeat；locの数つなげる
    // substring;loc番目以降の文字を取り出す
    target.textContent = '_'.repeat(loc) + word.substring(loc);

     // タイムを表示
    if (loc === word.length) {
    // ワードがなくなった表示する    
        if(words.length === 0) {
            // elapsedTime;経過時間
            const elapsedTime = ((Date.now() - startTime)/1000).toFixed(2);
            const result = document.getElementById('result');
            result.textContent = `Finished!${elapsedTime}seconds`;
            return;
        }

    // 関数の呼び出し
        setWord();
    }
    });
}

