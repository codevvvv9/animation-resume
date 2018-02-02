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
var n = 0
var id = setInterval (() => {
  n += 1
  code.innerHTML = result.substring(0, n)
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
  // code.innerHTML = code.innerHTML.replace('html', '<span style="color: red;">html</span>')
  styleTag.innerHTML = result.substring(0, n)
  if (n >= result.length) {
      window.clearInterval(id)
      fn2()
      fn3(result)
    }
}, 10)

function fn2() {
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}
function fn3(preResult) {
    var result = `
    #paper{
        width: 100px; 
        height: 100px;
        background: red;
    }
    `
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