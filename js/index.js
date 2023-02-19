document.onload = () => {
    // code to make textarea auto-resize
    const rantbox = document.getElementById("rantbox");
    rantbox[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
    rantbox[i].addEventListener("input", onInput, false);

    
}

function onInput() {
    this.style.height = 0;
    this.style.height = (this.scrollHeight) + "px";
}

function submit() {
    rantbox.readOnly = true;
}