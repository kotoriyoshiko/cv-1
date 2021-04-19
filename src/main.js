let html = document.querySelector("#demo"); //通过CSS选择器找到#demo
let style = document.querySelector("#style");
let string = `
/*你好，我是一名前端新人
*接下来我要加内容了
*首先准备一个div
*/
#div1{
    width:200px;
    height:200px;
    position:fixed;
    right:0;
    top:0;
    transform:translate(-50%)
}
/*接下来把div变成一个八卦
*先把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none; 
}
/*八卦是阴阳形成
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*加两个球
*/
#div1::before{
    content:'';
    display:black;
    // border:1px solid red;
    position:absolute;
    width:100px;
    height:100px;
    left:25%;
    top:0;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);

    
}
#div1::after{
    content:'';
    display:black;
    // border:1px solid red;
    position:absolute;
    width:100px;
    height:100px;
    left:25%;
    bottom:0;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 24%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 = string2 + "<br>";
    } else if (string[n] === " ") {
      string2 = string2 + "&nbsp";
    } else {
      string2 = string2 + string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scroll(0, 9999);
    html.scroll(0, 9999);
    if (n < string.length - 1) {
      n = n + 1;
      step();
    }
  }, 10);
};

step();
