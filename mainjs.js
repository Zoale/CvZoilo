'use strict';   
function typeWriter(el) {
    const text = el.innerHTML;
    el.innerHTML = '';
    let i = 0;
    const interval = setInterval(() => {
        if (i <= text.length) {
            el.innerHTML = text.substring(0, i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 25);
}

typeWriter(elementEl);

function scrollleft(){
    document.getElementById("scroll").style.left = '100%';
    setTimeout(scrollleft, 25);
}
scrollleft();
