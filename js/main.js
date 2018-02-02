// // The code snippet you want to highlight, as a string
// var text = "body{color: green};";

// // Returns a highlighted HTML string
// var css = Prism.highlight(text, Prism.languages.css);

// console.log(css)
var result = `/*
 *面试官你好，我是吴少林
 *我将以动画的形式来介绍我自己
 *只用文字介绍太单调了
 *我就用代码来介绍吧
 *首先准备一些样式
 *
 */
*{
  transition: all 1s;
}
html {
  background: rgb(222, 222, 222);
  font-size: 16px;
}
#code {
  border: 1px solid red;
  padding: 10px;
}

/* 我需要一点代码高亮 */ 
.token.selector {
    color: #690;
}
.token.property {
    color: #905;
}
.token.function {
    color: #DD4A68;
}

/* 加点3D效果吧 */
#code {
    transform: rotate(360deg);
}

/*好了， 我们不玩啦 */
/* 接下来，我们准备一张白纸介绍一下自己吧*/
`
var result2 = `
#paper{
    width: 100px; 
    height: 100px;
    background: red;
}
`
/**
 * 把code写到 #code和style标签里面
 * @param {*前缀} prefix 
 * @param {*要写进去的代码} code 
 * @param {*函数} fn 
 */
function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let n = 0
    console.log('设置闹钟')
    let id = setInterval(() => {
        n += 1
        console.log('开始写代码')
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight//保证代码一定会看得到
        if (n >= code.length) {
           window.clearInterval(id)
           fn.call()
        }
    }, 10)
}

writeCode('', result, () => { //write去calla这个function
    createPaper(() => {
        writeCode(result, result2)
    })
})

/* 
    异步的setInterval
    1. 定闹钟
    2. writeCode返回
    3. 执行fn2()
    4. 闹钟时间到
    5. 写第一行代码

    就好像 你先定了第二天6点闹钟，然后玩游戏。肯定是先玩游戏
*/

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    fn.call()
}

function fn3(preResult) {
   
    var n = 0
    var id = setInterval(() => {
        n += 1
        code.innerHTML = preResult + result.substring(0, n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
        styleTag.innerHTML = preResult + result.substring(0, n)
        if (n >= result.length) {
            window.clearInterval(id)
        }
    }, 50)
}