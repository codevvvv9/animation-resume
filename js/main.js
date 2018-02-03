
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
#code {
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
}
#paper > .content{
    background: white;
    height: 100%;
    width: 100%;

}
`
var result2 = `
#paper{
    
}
`
var md = `
# 自我介绍

我叫 吴少林
1991年 11月 7日出生
山东科技大学毕业
自学编程2年
自学前端半年

# 技能介绍

熟悉JavaScript HTML CSS3 JQuery

# 项目介绍

1. 各种轮播
[苹果风格的轮播](https://github.com/codevvvv9/appleSlide)
[无缝轮播](https://github.com/codevvvv9/goodSlide)
[双向的轮播](https://github.com/codevvvv9/slides-demo1)
2. 一个移动端PC端都能用的画板
[画板](https://github.com/codevvvv9/canvas-demo)
3. 一个静态简历
4. 一个动态的可编辑的键盘导航栏
`
var result3 = `
/*
 *这就是我用原生js做的会动的简历
 * 谢谢观看 ^_^
 * /
`
writeCode('', result, () => { //write去calla这个function
    //执行完了，才去createPaper
    createPaper(() => {
        writeCode(result, result2, () => {
            writeMarkdown(md, () => {
                writeCode(result, result2, () => {
                    convertMarkdownToHtml(() => {
                        writeCode(result+result2, result3, () => {
                            console.log('写完了')
                        })
                    })
                })
            })
        })
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
           fn && fn.call()
        }
    }, 10)
}

/**
 * 建立详细介绍页的函数
 * @param {*函数} fn 
 */
function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
}

/**
 * 写markdown语法的函数
 * @param {*markdown的内容} markdown 
 * @param {*} fn 
 */
function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight//保证代码一定会看得到
        if (n >= markdown.length) {
           window.clearInterval(id)
           fn && fn.call()
        }
    }, 10)

}

function convertMarkdownToHtml(fn){
  var div = document.createElement('div')  
  div.className = 'html markdown-body'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('#paper > .content')
  markdownContainer.replaceWith(div)
  fn && fn.call()
}
