let myText = document.getElementById('text');

window.onload = function() {
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            myText.style.fontSize = i + "px";
            let showSecond = document.getElementById('second');
            showSecond.value = i + " Second";
            let showFontSize = document.getElementById('fontSize');
            showFontSize.value = "Font Size :" + myText.style.fontSize;
        }, i * 1000);
    }

}