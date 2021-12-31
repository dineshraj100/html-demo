// question link: https://github.com/rvsp/HTML-CSS/blob/master/Mini-tasks/003-JS-DOM.md
// event reference link: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput
//1.
let div=document.createElement('div');
div.innerHTML="This is div";
div.addEventListener('mouseover',foo1);
document.body.append(div);


function foo1(){
    div.style.color="red";
    document.body.append(div);
}

//2.
document.querySelector('button').addEventListener('click',foo2);
function foo2(){
    let res=prompt("enter any value");
    let p=document.createElement('p');
    p.innerHTML=res;
    p.style.fontSize="64px";
    document.body.append(p);
}

// 3.
document.querySelector('div').addEventListener('mouseover',foo);
function foo(event){
    console.log(event);
    var p=document.createElement('p');
    p.setAttribute('class','text-primary');
    p.innerHTML=`client X:${event.clientX} and client Y:${event.clientY}`;
    document.body.append(p);
}

//4.
